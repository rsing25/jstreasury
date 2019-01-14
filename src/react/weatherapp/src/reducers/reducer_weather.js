import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {

	// same action which was promise  on payload now we have response for that.
	// redux promise sees the incoming action . it looks at payload property.
	// if payload is promise, redux promise will stop the action entirly
	// once the request finishes, it dispatches the new action with same type but the payload with result of request
    console.log('Action received', action);

    switch (action.type) {
        case FETCH_WEATHER:

        //return  state.push([action.payload.data]) ;         //push method mutates the array. it will mutate the state.
        return  state.concat([action.payload.data]) ;		//concat method creates a newarray. so it will always return new state.
    }
    console.log('state', state);
    return state;
}