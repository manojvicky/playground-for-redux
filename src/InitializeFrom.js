const LOAD="LOAD";

export function load(data){
    return{
        type: LOAD,
        data
    }
};

export default function initializeReducer(state={}, action){
switch(action.type){
case LOAD :
        return {
            data: action.data,
        };
    default:
            return state; 
    }
}