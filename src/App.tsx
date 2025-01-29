
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PPDB from './pages/Ppdb';
import Berita from './pages/berita';
import Organisasi from './pages/organisasi';
import SubOrganisasi from './pages/suborganisasi';
import Ekstrakurikuler from './pages/ekstrakurikuler';
import StrukturOrganisasi from './pages/StrukturOrganisasi';
import Contact from './pages/Contact';
// 
import NewsList from './components/newslist';
import newsData from "./data/newsdata";
import DetailBerita from './pages/detail-berita';
import CardPK from './components/cardpk';
import PkDetail from './components/pkDetail';
// import DetailPK from './pages/detail-pk';


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
        <Route path="/strukturorganisasi" element={<StrukturOrganisasi />} />
        <Route path="/contact" element={<Contact />} />
        {/*  */}
        <Route path="/" element={<NewsList filteredNews={newsData} />} />
        <Route path="/news/:id" element={<DetailBerita />} />
        <Route path="/pk" element={<CardPK />} />
        <Route path="/detail-pk/:id" element={<PkDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
