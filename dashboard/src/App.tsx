
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Allnews from './pages/Allnews';
import Addnews from './pages/Addnews';
import Category from './pages/Category';
import Comentary from './pages/Comentary';
import Message from './pages/Message';
import Tautan from './pages/Tautan';
import PPDB from './pages/PPDB';
import ProgramKeahlian from './pages/ProgramKeahlian';
import Organization from './pages/Organization';
import SubOrganization from './pages/SubOrganization';
import Extracurricular from './pages/Extracurricular';
import ProfileSchool from './pages/ProfileSchool';
import VMT from './pages/VMT';
import Profile from './pages/Profile';
import StructureOrganization from './pages/StructureOrganization';
import Editnews from './pages/Editnews';
import DashJurnalis from './pages/DashJurnalis';
import ProfileJurnalis from './pages/ProfileJurnalis';
import AllnewsJur from './pages/Allnewsjur';
import AddnewsJur from './pages/Addnewsjur';
import CategoryJur from './pages/CategoryJur';
import ComentaryJur from './pages/ComentaryJur';
import Setpengguna from './pages/Setpengguna';
import HightlightBeranda from './pages/Hightlightberanda';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/highlight-beranda' element={<HightlightBeranda />} />
        <Route path="/allnews" element={<Allnews />} />
        <Route path="/addnews" element={<Addnews />} />
        <Route path="/category" element={<Category />} />
        <Route path="/comentary" element={<Comentary />} />
        <Route path="/message" element={<Message />} />
        <Route path="/tautan" element={<Tautan />} />
        <Route path="/ppdb" element={<PPDB />} />
        <Route path="/program-keahlian" element={<ProgramKeahlian />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/sub-organization" element={<SubOrganization />} />
        <Route path="/extracurricular" element={<Extracurricular />} />
        <Route path="/profileschool" element={<ProfileSchool />} />
        <Route path="/vmt" element={<VMT />} />
        <Route path="/struktur-organisasi" element={<StructureOrganization />} />
        <Route path="/set-pengguna" element={<Setpengguna />} />
        <Route path="/editnews" element={<Editnews />} />
        {/* bagian jurnalis */}
        <Route path='/dashjurnalis' element={<DashJurnalis />} />
        <Route path="/profilejurnalis" element={<ProfileJurnalis />} />
        <Route path="/allnewsjur" element={<AllnewsJur />} />
        <Route path="/addnewsjur" element={<AddnewsJur />} />
        <Route path="/categoryjur" element={<CategoryJur />} />
        <Route path="/comentaryjur" element={<ComentaryJur />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
