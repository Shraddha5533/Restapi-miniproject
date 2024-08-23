import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import productreducer from './productreducer';

const rootReducer = combineReducers({
  products: productreducer,
});

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    {/* Rest of your components */}
  </Provider>
);

export default App;
