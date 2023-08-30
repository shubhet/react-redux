import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import Home from "./components/Home";
import HomeContainer from "./containers/HomeContainer"

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1> */}
       <HomeContainer />
      {/* <User data={{ name: "shubham", age: 22 }} /> */}
    </div>
  );
}

export default App;
