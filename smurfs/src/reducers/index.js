/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

import { 
  ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL, GET_SMURF_START, GET_SMURF_SUCCESS, GET_SMURF_FAIL, DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAIL } from '../actions'

const initialState = {
  smurfs:[
    {
      name:'',
      age: '',
      height: '',
      id: Date.now(),
      isloading:false,
      error: null
    }
  ]
};

function reducer(state = initialState, action) {
  switch(action.type){
    case GET_SMURF_START:
    case ADD_SMURF_START:
    case DELETE_SMURF_START:
      return {
        ...state,
        error:'',
        isloading: true
      }
    
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error:'',
        isloading: false
      }
    case GET_SMURF_FAIL:
      return {
        ...state,
        error: action.payload,
        isloading: false
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        error: '',
        isloading: false
      }  
    case ADD_SMURF_FAIL:
        return {
          ...state,
          error: action.payload,
          isloading:false
        }
    case DELETE_SMURF_SUCCESS:
        return {
          ...state,

          smurfs: action.payload,
          isloading: false,
          error: ''
        }
    case DELETE_SMURF_FAIL:
        return {
          ...state,
          error: action.payload,
          isloading: false
        }    
    
    default:
      return state;
  }
}

export default reducer;