class MyPromise {

	constructor( executor) {
		this._resolutionQueue = [];
		this._value;

		this._rejectionQueue = [];
		this._rejectionReason;

		this.state = "pending";

		try{
			executor(this._resolve.bind(this),  this._reject.bind(this))
		} catch(e) {
			this._reject(e);
		}
	}


	_runResolutionHandlers() {

		while(this._resolutionQueue.length > 0) {
			var resolution = this._resolutionQueue.shift();

			try {
				var returnValue = resolution.handler(this._value);
			} catch(e) {
				resolution.promise._reject(e);

			}

			if(returnValue && returnValue instanceof MyPromise) {
						returnValue.then( function(v) {
							resolution.promise._resolve(v);
						}).catch(function(e) {
							resolution.promise._reject(v);
						})
					} else {
						resolution.promise._resolve(returnValue);

					}
			}
		}
	}

	_resolve(value) {
		if(this._state == 'pending') {
			this._value = value;
			this._state= 'resolved';
			this._runResolutionHandlers();
		}

	}

	then(resolutionHandler , rejectionHandler) {
		var newPromise = new MyPromise(function(){});
		
		this._resolutionQueue.push({handler:resolutionHandler , promise:newPromise});
		if(this._state == 'pending') {
			this._runResolutionHandlers();
		}

		if (typeof rejectionHandler === 'function')
		this._rejectionQueue.push({handler:rejectionHandler , promise:newPromise});

		if(this._state == 'resolved') {
			this._runResolutionHandlers();
		}

		if(this._state == 'rejected') {
			newPromise._reject(this._rejectionReason);
		}
		

		return newPromise;
	}


	_runRejectionHandlers() {

		while(this._rejectionQueue.length > 0) {
            var rejection = this._rejectionQueue.shift();

			try {
				var returnValue = rejection.handler(this._rejectionReason);
			} catch(e) {
					rejection.promise._reject(e);
			}

			if(returnValue && returnValue instanceof MyPromise) {
						returnValue.then( function(v) {
							rejection.promise._resolve(v);
						}).catch(function(e) {
							rejection.promise._reject(v);
						})
					} else {
						rejection.promise._resolve(returnValue);

					}
			}
		
	}

	_reject(reason) {
		if(this._state == 'pending') {
			this._rejectionReason = reason;
			this._state= 'rejected';
			this._runRejectionHandlers();
		}

	}

	catch(rejectionHandler) {

		var newPromise = new MyPromise(function(){});
		this._rejectionQueue.push({handler:rejectionHandler , promise:newPromise});
		if(this._state == 'rejected') {
			this._runRejectionHandlers();
		}


	}


}