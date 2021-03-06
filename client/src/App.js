import React, { useEffect } from 'react';
import './App.css';
import AppNavBar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store';
import { Container } from 'reactstrap';
import { ItemModal } from './components/ItemModal';
import { loadUser } from './actions/authActions';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <AppNavBar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
