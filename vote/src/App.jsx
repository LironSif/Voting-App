import React, { useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { useUserData } from './context/UserDataContext';
import Vote from './pages/VotePage/Vote';
import Admin from './pages/Admin/Admin';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav/Nav';

function App() {
  const { userData } = useUserData();

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const isAdmin = userData?.isAdmin; 

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={userData ? <Navigate replace to="/vote" /> : <Navigate replace to="/login" />} />
        <Route path="/login" element={userData ? <Navigate replace to="/vote" /> : <Login />} />
        <Route path="/vote" element={userData ? <Vote /> : <Navigate replace to="/login" />} />
        <Route path="/Admin" element={<Admin />} />

        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
