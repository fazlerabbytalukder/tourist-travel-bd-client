import logo from './logo.svg';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import PrivateRoute from './pages/Login/Login/PrivateRoute/PrivateRoute';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import Booking from './pages/Booking/Booking/Booking';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home></Home>}>
              
            </Route>
            <Route path='/home' element={<Home></Home>}>
              
            </Route>
            <Route path='/booking' element={<PrivateRoute><Booking></Booking></PrivateRoute>}>
              
            </Route>
            <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
              
            </Route>
            <Route path='/login' element={<Login></Login>}>
              
            </Route>
            <Route path='/register' element={<Register></Register>}>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
