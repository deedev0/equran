import Navigation from './Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TafsirPage from '../pages/TafsirPage';
import ReadPage from '../pages/ReadPage';
import ReadTafsirPage from '../pages/ReadTafsirPage';
import NotFoundPage from '../pages/NotFoundPage';

function EquranApp() {
  return (
    <>
      <Navigation />
      <div className="container mt-3">
        <h1>Elektronik Al-Qur&apos;an</h1>  
        <hr />
        <main>  
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/tafsir' element={<TafsirPage />} />
            <Route path='/tafsir/:nomor' element={<ReadTafsirPage />} />
            <Route path='/read/:nomor' element={<ReadPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  )

}

export default EquranApp;
