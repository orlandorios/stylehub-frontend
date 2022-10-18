import logo from './logo.svg';
import './reactTags.css'
import './App.css';
import { TopNavbar } from './components/TopNavbar';
import { BottomNavbar } from './components/BottomNavbar';
import { Routes, Route, Switch } from 'react-router';
import { AddClosetItem } from './components/AddClosetItem'
import { CurrentOutfit } from './components/CurrentOutfit';
import { Profile } from './components/Profile';
import { ViewOutfits } from './components/ViewOutfits';
import { Auth } from './components/Auth';
import { Closet } from './components/Closet';
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [currOutfit, setCurrOutfit] = useState({})
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false)

  useEffect(() => {
    axios
      .get('https://stylehub.herokuapp.com/myoutfits/',
      {
          headers: {
              Authorization: `Token af6053eea103fe7a3e9c9d9e4d054cf5f7a527d1`,
          },
      })
      .then((res) => {
        for (const outfit of res.data) {
          if (outfit.draft === true) {
            setCurrOutfit(outfit)
            setLoading(false)
            break;
          }
        }
        
      })
      .catch((err) => setError(err.response.data.error))
}, [])

  return (
  
    <div className="App">
      <TopNavbar />
        <Routes>
          <Route path="/" element={<Closet/>} />
          <Route path="add-item" element={<AddClosetItem />} />
          <Route path="current-outfit" element={<CurrentOutfit currOutfit={currOutfit} setCurrOutfit={setCurrOutfit} loading={loading} setLoading={setLoading} />} />
          <Route path="user/1" element={<Profile />} />
          <Route path="user/1/outfits" element={<ViewOutfits />} />
        </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
