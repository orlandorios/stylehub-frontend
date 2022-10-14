import logo from './logo.svg';
import './reactTags.css'
import './App.css';
import { TopNavbar } from './components/TopNavbar';
import { BottomNavbar } from './components/BottomNavbar';
import { Routes, Route, Switch } from 'react-router';
import { AddClosetItem } from './components/AddClosetItem'
import { Profile } from './components/Profile';
import { ViewOutfits } from './components/ViewOutfits';
import { Closet } from './components/Closet';


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Closet/>
        <Routes>
          <Route path="add-item" element={<AddClosetItem />} />
          <Route path="user/1" element={<Profile />} />
          <Route path="user/1/outfits" element={<ViewOutfits />} />
        </Routes>
      <BottomNavbar />
    </div>
  );
}

export default App;
