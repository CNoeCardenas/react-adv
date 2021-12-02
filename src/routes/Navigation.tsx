import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { routes } from "./routes";
import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {routes.map(({to, name}) => (
               <li key={ to }>
               <NavLink 
                   to={ to } 
                   className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                   { name }
               </NavLink>
           </li>
            ))}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};
