import CartWidget from './CartWidget';
// import styles from './NavBar.module.css';

const NavBar = (props) => {
     return (
          <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-4 p-2">
               <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                    <img width="100vw" src={props.logo} alt={props.alt}></img>LIMITED EDITION
                    </a>
                    <button 
                         className="navbar-toggler" 
                         type="button" 
                         data-bs-toggle="collapse" 
                         data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                         aria-expanded="false" 
                         aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Americanos</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Europeos</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Mangas</a>
                              </li>
                         </ul>
                         <CartWidget cant={6}/>
                    </div>
                    {/* <CartWidget cant={6}/> */}
               </div>
          </nav>
          </>
     )
}

export default NavBar;