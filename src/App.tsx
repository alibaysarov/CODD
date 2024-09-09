import { Route, Routes } from 'react-router-dom';
import './App.css'

import Main from "./pages/main"
import News from './pages/news';
import SinglePage from './pages/news/single-page';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/:id' element={<SinglePage />} />
    </Routes>
  )
}

export default App
