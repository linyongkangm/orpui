import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import BlockDemo from './BlockDemo';
import GridDemo from './GridDemo';
import LayoutDemo from './LayoutDemo';
import PromiseDemo from './PromiseDemo';
import './style.scss';
import withListDemo from './withListDemo';

const Comps = [BlockDemo, GridDemo, PromiseDemo, LayoutDemo, withListDemo];

function Nav() {
  return (
    <div>
      {Comps.map((Comp) => <div key={Comp.name}><Link to={`/${Comp.name}`}>{Comp.name}</Link></div>)}
    </div>
  );
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={Nav} />
      {
        Comps.map((Comp) => <Route path={`/${Comp.name}`} component={Comp} key={Comp.name} />)
      }
    </Switch>
  </Router>,
  document.getElementById('typescript-root'),
);
