import { Route, Routes } from 'react-router-dom';
import './App.css'

import Main from "./pages/main"
import News from './pages/news';
import SinglePage from './pages/news/single-page';
import QueueList from './pages/electronic-queue/queue-list';
import QueueMain from './pages/electronic-queue/queue-main';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/news' element={<News />} />
      <Route path='ru/news/:url' element={<SinglePage />} />
      <Route path='/el-queue' element={<QueueMain />} />
      <Route path='/queue-list' element={<QueueList />} />
    </Routes>
  )
}

export default App
