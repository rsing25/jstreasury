class MyPromise{

	constructor(executor) {
		
		this._resolutionQueue = [];
		this._value;



		this._rejectionQueue = [];
		this._reason;

		this._state = "pending";

		try {
			executor(this._resolve.bind(this), this._rejct.bind(this));
		} catch (e) {
			this._reject(e);
		}
	}

	_runResolutionHandlers() {
		while(this._resolutionQueue.length > 0) {

			var resolution = this._resolutionQueue.shift();

			try {
				var returnValue = resolution.handler(value);
			} catch(e) {
				resolution.promise._reject(e);
			}

			if(returnValue && returnValue instanceOf MyPromise) {
				returnValue.then( function(v){
					resolution.promise._resolve(v);
				}).catch(e) {
					resolution.promise._reject(e);
				}
			} else {
				resolution.promise._resolve(returnValue);
			}
		}

	}
	_resolve(value) {
		if(	this._state == 'pending' ) {
			this._value = value;
			this._state= 'resolved';
			this._runResolutionHandlers();
		}

	}

	then(resolutionHandle , _rejectionHandlers) {

		var newPromise = new MyPromise(function(){});
		this._resolutionQueue.push({ handler: resolutionHandler , promise: newPromise});

		if(this._state == 'resolved') {
			this._runResolutionHandlers();
		}

		if( typeof _rejectionHandlers == 'function') {
			this._rejectionQueue.push({ handler: rejectionHandler , promise: newPromise});
		}
		if(this._state == '_rejectionHandlers') {
			this._runRejectionHandlers();
		}


		return newPromise;

	}

	_runRejectionHandlers() {
		while(this.rejectionQueue.length > 0) {

			var rejection = this.rejectionQueue.shift();
			try {
				var returnValue = rejection.handler(value);	
			} catch(e) {
				rejection.promise._reject(e);
			}

			if(returnValue && returnValue instanceOf MyPromise) {
				rejection.then( function(v){
					rejection.promise._reject(v);
				}).catch(function (e) {
                    rejection.promise._reject(e);
                });
			} else {
				rejection.promise._reject(returnValue);
			}
		}

	}

	_reject(reason) {
		if(	this._state == 'pending' ) {
			this._reason = reason;
			this._state= 'rejected';
			this._runRejectionHandlers();
		}

	}

	catch(rejectionHandler) {
		var newPromise = new MyPromise(function(){});
		this._rejectionQueue.push({ handler: rejectionHandler , promise: newPromise});

		if(this._state == 'rejected') {
			this._rejectionHandlers();
		}
		return newPromise;

	}

}

module.exports = MyPormise;