import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6189088Reducer from '../features/CalendarView6189088/redux/reducers';
import Dashboard17189087Reducer from '../features/Dashboard17189087/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6189088: CalendarView6189088Reducer,
Dashboard17189087: Dashboard17189087Reducer,

});