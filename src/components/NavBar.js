import CartWidget from './CartWidget';
import styles from './NavBar.module.css';

const NavBar = (props) => {
     return (
          <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-4 p-2">
               <div className="container-fluid">
                    <button 
                         className="navbar-toggler" 
                         type="button" 
                         data-bs-toggle="collapse" 
                         data-bs-target="#navbarNavDropdown" 
                         aria-controls="navbarNavDropdown" 
                         aria-expanded="false" 
                         aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" className={styles.navbar__brand} href="/">
                    <img className={styles.navbar__brand__img} src={props.logo} alt={props.alt}></img>LIMITED EDITION
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <a className={styles.nav__link} href="/">Americanos</a>
                              </li>
                              <li className="nav-item">
                                   <a className={styles.nav__link} href="/">Europeos</a>
                              </li>
                              <li className="nav-item">
                                   <a className={styles.nav__link} href="/">Mangas</a>
                              </li>
                         </ul>
                    </div>
                    <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                         <CartWidget cant={6}/>
                    </ul>
               </div>
          </nav>
          </>
     )
}

export default NavBar;