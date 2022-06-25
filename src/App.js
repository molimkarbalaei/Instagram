// for having router:
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as ROUTES from "./constants/routes";

// for swithching between pages: use lazy

const Login = lazy(() => import("./pages/login"));
// now for using lazy: use suspense

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route exact path={ROUTES.LOGIN} element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
