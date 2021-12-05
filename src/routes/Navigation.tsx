import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={(isActive) =>
                  "nav-link" + (!isActive ? " unselected" : "")
                }
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/users" element={<h1>Users</h1>}></Route>
          <Route path="/" element={<ShoppingPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
