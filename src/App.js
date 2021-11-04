import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles, { Container } from './GlobalStyles';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Container>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/catalog/:slug" component={Product} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
