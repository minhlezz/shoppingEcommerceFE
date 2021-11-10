import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles, { Container } from './GlobalStyles';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:slug" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </Router>
  );
}

export default App;
