
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className='container-fluid bg-faded padding-media'>
    <div className='container padding-media'>
       <nav className='navbar navbar toggleable -md navbar-light'>
       <button className="navbar-toggler mt-3" type="button" 
       data-bs-toggle="collapse"
       data-bs-target="navbarSupportedContent" 
       aria-controls="navbarSupportedContent" 
       aria-expanded="true" 
       aria-label="Toggle navigation">
       <span className="fa fa-bars"></span>

       </button>
       <div className='collapse navbar-collapse'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0' id = "navbarSupportedContent">
        <li className='nav-item nav-link'>
           Home </li>
        <li className='nav-item nav-link'>
           Crea Contenido </li>
        <li className='nav-item nav-link'>
           Acerca de mi </li>
        </ul>
        <div className='row g-3'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item nav-link'>
           Login </li>
        
                
            </ul>
        </div>
       </div>

       </nav> 
    </div>


    </div>

    </nav>
  )
}

export default Header