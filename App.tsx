//Navigation component that handles all navigation
import Navigation from './Navigation';

//redux store and provider
import { Provider } from 'react-redux';
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
    <Navigation></Navigation>
   </Provider>
  );
}
