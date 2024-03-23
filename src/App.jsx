import Login from "./components/Loginpage";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Booksmainpage from "./components/Booksmainpage"
// import {createRoot} from "react-dom";

const App = () => {
  return (
    <div>
    <Login/>
    </div>
  )
}

// const App = ()=>{
//   return (
//     <Router>
//          <Switch>
//           <Route path="/" element={<Login/>} />
//           <Route path="/booksmainpage" element={<Booksmainpage/>} />
//          </Switch>
    
//     </Router>
//   )
// };







// const root = createRoot(document.getElementById('root'));
// root.render(<App/>)
export default App
