import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import News from '../News/News';
import Profile from '../Profile/Profile'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='*' element={null} />
        <Route path='news' element={<News />} />
        <Route path='profile/*' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
