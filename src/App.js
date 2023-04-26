import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

const [iTime, setiTime] = useState(new Date().toLocaleString());
const [cTime, setcTime] = useState(new Date().toLocaleString());
const [eTime, seteTime] = useState(new Date().toLocaleString());
const [gTime, setgTime] = useState(new Date().toLocaleDateString());
useEffect(() => {
    setInterval(() => {
      var striTime = new Date().toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
      var strcTime = new Date().toLocaleString(undefined, {timeZone: 'America/Chicago'});
      var streTime = new Date().toLocaleString(undefined, {timeZone: 'America/New_York'});
      var strgTime = new Date().toLocaleString(undefined, {timeZone: 'Greenwich'});
      setiTime(striTime);
      setcTime(strcTime);
      seteTime(streTime);
      setgTime(strgTime);
  },1000)     
})

  return (
    <div className="App">
        <h1> Date and Time in different Time Zones </h1>
        <h2> IST : {iTime}</h2>        
        <h2> CST : {cTime}</h2>
        <h2> EST : {eTime}</h2>
        <h2> GMT : {gTime}</h2>
    </div>
  );
}

export default App;
