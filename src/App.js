import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={Catalog} />
        <Route exact path="/catalog/:slug" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
