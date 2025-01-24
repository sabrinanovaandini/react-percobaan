
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PPDB from './pages/Ppdb';
// import About from './pages/about';
import Berita from './pages/berita';
import NewsList from './components/newslist';
import newsData from "./data/newsdata";
import DetailBerita from './pages/detail-berita';
import PkDetail from './components/pkDetail';
import CardPK from './components/cardpk';
import Contact from './pages/Contact';
import Organisasi from './pages/organisasi';
import SubOrganisasi from './pages/suborganisasi';
import Ekstrakurikuler from './pages/ekstrakurikuler';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/berita" element={<Berita />} />
        <Route path="/organisasi" element={<Organisasi />} />
        <Route path="/suborganisasi" element={<SubOrganisasi />} />
        <Route path="/ekstrakurikuler" element={<Ekstrakurikuler />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<NewsList filteredNews={newsData} />} />
        <Route path="/news/:id" element={<DetailBerita />} />
        <Route path="/pk" element={<CardPK />} />
        <Route path="/pk/:id" element={<PkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
