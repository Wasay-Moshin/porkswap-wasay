import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";
import Footers from "./Component/Layouts/Footers";
import Header from "./Component/Layouts/Header";
import Home from "./Pages/Home";
function App() {
  return <div className="App">
     <Header/>
     <Home/>
    <Footers/>
   
  </div>;
}

export default App;
