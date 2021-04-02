import { Route, Switch } from 'react-router-dom';

import { Header } from './components';
import { Home, Cart, Product } from './pages';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="main">
        <div className="container">
          <Switch>
            <Route path="/product/:userId?" render={() => <Product />} />
            <Route path="/cart" render={() => <Cart />} />
            <Route path="/" render={() => <Home />} />
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
