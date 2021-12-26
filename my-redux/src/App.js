import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import Profile from './components/Profile';
import Theme from './components/Theme';



function App() {
  const themeColor = useSelector((state)=>state)
  console.log(themeColor);
  return (
    <div style={{backgroundColor:themeColor}}>
      <Theme />
      <Profile />
      <Login />
    </div>
  );
}

export default App;
