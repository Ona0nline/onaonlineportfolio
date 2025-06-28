import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";
import MyComponent from "./util/MotionExample";

function App() {
  return (
    <div className="App">
<header>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/work"} element={<Work/>}/>
            <Route path={"/about"} element={<AboutMe/>}/>
        </Routes>
    </BrowserRouter>

</header>
    <MyComponent/>
    </div>
  );
}

export default App;
