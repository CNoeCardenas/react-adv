import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { routes } from "../routes/routes";

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayoutModule</h1>
      <ul>
        {routes.map(({ path, name }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={(navData) => (navData.isActive ? "nav-active" : "")}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}

        <Route path="*" element={<Navigate to={routes[0].path} replace />} />
      </Routes>
    </div>
  );
};

export default LazyLayout;
