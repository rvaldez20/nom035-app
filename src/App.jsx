import React from 'react';

import {
   Routes,
   Route,
} from 'react-router-dom';

import Header from './components/Header'
import Layout from './components/Layout';

import Home from './pages/Home'
import Fase1 from './pages/Fase1'
import Fase2 from './pages/Fase2'
import Fase3 from './pages/Fase3'
import Fase4 from './pages/Fase4'
import Empresas from './pages/Empresas'
import Trabajadores from './pages/Trabajadores'
import Preguntas from './pages/Preguntas'
import Respuestas from './pages/Respuestas'

const App = () => {
  
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />

               <Route path="/fase1" element={<Fase1 />}/>
               <Route path="/fase2" element={<Fase2 />}/>
               <Route path="/fase3" element={<Fase3 />}/>
               <Route path="/fase4" element={<Fase4 />}/>

               <Route path="/empresas" element={<Empresas />}/>
               <Route path="/trabajadores" element={<Trabajadores />}/>
               <Route path="/preguntas" element={<Preguntas />}/>
               <Route path="/respuestas" element={<Respuestas />}/>
            </Route>
         </Routes>      
      </>
   )
}

export default App
