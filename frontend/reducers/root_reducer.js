import { combineReducers } from 'redux';
import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import EntityReducer from './entity_reducer';
import UIReducer from './ui_reducer';
import SearchReducer from './search_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntityReducer,
  ui: UIReducer,
  search: SearchReducer,
});

export default RootReducer;
