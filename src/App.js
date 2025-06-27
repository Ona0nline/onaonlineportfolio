import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <div className="App">
        <h1>good day</h1>
<header>
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/work"} element={<Work/>}/>
            <Route path={"/about"} element={<AboutMe/>}/>


        </Routes>
    </BrowserRouter>

</header>

    </div>
  );
}

export default App;
