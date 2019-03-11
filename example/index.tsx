import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import AffixDemo from './AffixDemo';
import BlockDemo from './BlockDemo';
import GridDemo from './GridDemo';
import LayoutDemo from './LayoutDemo';
import PromiseDemo from './PromiseDemo';
import withListDemo from './withListDemo';
import PaginationDemo from './PaginationDemo';
import FormDemo from './FormDemo';
import ButtonDemo from './ButtonDemo';
import './style.scss';

const Comps = [BlockDemo, GridDemo, PromiseDemo, LayoutDemo, withListDemo, AffixDemo, PaginationDemo, FormDemo, ButtonDemo];

function Nav() {
  return (
    <div>

      {Comps.map((Comp) => {
        return <div key={Comp.name}><Link to={`/${Comp.name}`}>{Comp.name}</Link></div>
      })
      }
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
