import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import assemblers from "./assemblers";

// Main app
function App(): JSX.Element {
  const { Home, Detail, SignIn, SignUp, Forget, Fund } = assemblers;
  return (
    // Main division
    <div className="App" style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Router>
        <Switch>
          {/* Routes */}
          <Route path="/" component={Home} exact />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/referal/:id">
            <Detail referal />
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/forget" component={Forget} />
          <Route path="/fund" component={Fund} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
