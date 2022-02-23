import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "../Components";
import allPaths from "./path";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={allPaths.HOME} exact component={Home} />
        <Route path={allPaths.LOGIN} exact component={Login} />
      </Switch>
    </Router>
  );
};
export default Routes;
