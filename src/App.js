import './App.css';
import Homepage from './Components/homepage/homepage';
import Login from './Components/login/login';
import Register from './Components/register/register';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { useState } from 'react';


function App() {

  const [user,setLoginUser] = useState({});

  return (
     <div className='App'>

     {/* <Router>
      <Routes>
        <Route exact path="/" element={<Homepage/>}>
        <Route path="/login"><Login/></Route>
        <Route path="/register"><Register/></Route>
      </Routes>
     </Router> */}


     <Router>
        <Routes>
          <Route exact path="/" 
          element={
            
          <Homepage/>} />

{/* <Route exact path="/">
  {
    user && user._id ? <Homepage/> : <Login/>
  }
</Route> */}

          <Route  path="/login" element={<Login/>} />
          <Route  path="/register" element={<Register/>} />
        </Routes>
      </Router>

      {/* <Homepage/>
      <Login/>
      <Register/> */}
     </div>
  );
}

export default App;
