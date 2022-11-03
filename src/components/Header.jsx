import { Link } from 'react-router-dom'


const Header = () => {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
         {/* <a className="navbar-brand" href="#">NOM-035</a> */}
         <Link className="navbar-brand" to="/">NOM-035</Link>

         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  {/* <a className="nav-link" aria-current="page" href="#">Aplicar Cuestionario</a> */}
                  <Link className="nav-link" to="/fase1">Aplicar Cuestionario</Link>
               </li>

               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     Catálogos
                  </a>
                  <ul className="dropdown-menu">
                     <li>
                        {/* <a className="dropdown-item" href="#">Empresas</a> */}
                        <Link className="dropdown-item" to="/empresas">Empresas</Link>
                     </li>
                     <li>
                        {/* <a className="dropdown-item" href="#">Trabajadores</a> */}
                        <Link className="dropdown-item" to="/trabajadores">Trabajadores</Link>
                     </li>
                     <li>
                        {/* <a className="dropdown-item" href="#">Preguntas</a> */}
                        <Link className="dropdown-item" to="/preguntas">Preguntas</Link>
                     </li>
                     <li>
                        {/* <a className="dropdown-item" href="#">Respuestas</a> */}
                        <Link className="dropdown-item" to="/respuestas">Respuestas</Link>
                     </li>
                  </ul>
               </li>
            </ul>            
         </div>
      </div>
   </nav> 
  )
}

export default Header