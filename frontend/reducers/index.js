import { combineReducers } from 'redux';
import ErrorsReducer from './errors';
import SessionReducer from './session';
import EntityReducer from './entity';
import UIReducer from './ui';
import SearchReducer from './search';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  entities: EntityReducer,
  ui: UIReducer,
  search: SearchReducer,
});

export default RootReducer;
