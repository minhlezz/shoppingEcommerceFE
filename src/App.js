import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GlobalStyles from './GlobalStyles';
import Header from './components/Header';
import Catalog from './pages/Catalog';
import Hero from './pages/Hero';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/heroes" component={Catalog} />
        <Route exact path="/hero/:id" component={Hero} />
      </Switch>
    </Router>
  );
}

export default App;
