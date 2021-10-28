import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles, { Container } from './GlobalStyles';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Container>
        <Switch>
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/hero/:id" component={Hero} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
