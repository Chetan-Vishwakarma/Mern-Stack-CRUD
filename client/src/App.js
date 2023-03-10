//components
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';

//for Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EditUser from './components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/all' element={<AllUsers/>} />
        <Route path='/add' element={<AddUser/>} />
        <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
