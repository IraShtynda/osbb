import './App.scss';
import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header'
import News from '../News/News'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;
