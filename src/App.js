// import logo from './logo.svg';
//import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Navbar } from './component/Navbar';
import { Login } from './component/Login';
import {Signup} from './component/Signup';
import { Auth } from './component/Auth';
import { Protected } from './component/Protected';
import Nomatch from './component/Nomatch';


import { User } from './component/User';
import { Admin } from './component/Admin';
import Home  from './component/Home'
import { Profile } from './component/Profile';
import { Conduct } from './component/Conduct';

function App() {
  return (
    <div className="App">
      <Auth>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<Nomatch/>}/>
        <Route path='/users' element={<Protected>
          
          <User/>
        </Protected>}></Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/Admin' element={<Protected><Admin/></Protected>
          
        }/>
      </Routes>
        </Auth>
    </div>
  );
}

export default App;