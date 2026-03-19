import ClassComponent from "./ClassComponent";
import CounterApp from "./CounterApp";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <ClassComponent />

      <h1 align='center'>Function based Component</h1>
      <hr />
      <CounterApp/>
      <Login/>
      <Register/>

    </>
  );
}

export default App;
