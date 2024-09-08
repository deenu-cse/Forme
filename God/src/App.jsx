import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from '../component/Home'
import Firstday from '../component/Firstday'
import Yourvoice from '../component/Yourvoice'
import Hellostyle from '../component/Hellostyle'
import Chat from '../component/Chat'
import Tumhiho from '../component/Tum-hi-ho'
import Youlove from '../component/Youlove'
import Howmuch from '../component/Howmuch'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Firstday' element = {<Firstday/>}/>
          <Route path='/Your-voice' element={<Yourvoice/>}/>
          <Route path='/Hellostyle' element={<Hellostyle/>}/>
          <Route path='/Chat' element={<Chat/>}/>
          <Route path='/tum-hi-ho' element={<Tumhiho/>}/>
          <Route path='/You_love_me' element={<Youlove/>}/>
          <Route path='/HowMuch' element={<Howmuch/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
