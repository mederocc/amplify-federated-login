import Home from "./routes/Home";
import MainContainer from "./components/MainContainer";
import Login from "./views/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<MainContainer />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </Router>
  );
}

export default App;
