import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import styles from './NavBar.module.css';

const NavBar = (props) => {

     // const tipear = (ev) => {
     //      if ((ev.keyCode === 65) || (ev.keyCode === 69) || (ev.keyCode === 73) || (ev.keyCode === 79) || (ev.keyCode === 85)) {
     //           ev.preventDefault();

     //           switch (ev.keyCode) {
     //                case 65:
     //                     console.log('Tipeaste una A');
     //                     break;
     //                case 69:
     //                     console.log('Tipeaste una E');
     //                     break;
     //                case 73:
     //                     console.log('Tipeaste una I');
     //                     break;
     //                case 79:
     //                     console.log('Tipeaste una O');
     //                     break;
     //                case 85:
     //                     console.log('Tipeaste una U');
     //                     break;
     //                default:
     //                     break;
     //           }
     //      }
     // }

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
                    <NavLink to={'/'} className={styles.navbar__brand}>
                         <img className={styles.navbar__brand__img} src={props.logo} alt={props.alt}></img>LIMITED EDITION
                    </NavLink>
                    {/* <Link to={'/'} className={`{styles.navbar__brand ${'nav-bar'}}`}>
                         <img className={styles.navbar__brand__img} src={props.logo} alt={props.alt}></img>LIMITED EDITION
                    </Link> */}
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                              <li className="nav-item">
                                   <Link to={'/category/0'} className={styles.nav__link}>AMERICANOS</Link>
                              </li>
                              <li className="nav-item">
                                   <Link to={'/category/1'} className={styles.nav__link}>EUROPEOS</Link>
                              </li>
                              <li className="nav-item">
                                   <Link to={'/category/2'} className={styles.nav__link}>MANGAS</Link>
                              </li>
                         </ul>
                    </div>
                    {/* <div>
                         <input onKeyDown={tipear}></input>
                         <Input></Input> 
                    </div>*/}
                    <ul className="navbar-nav md-auto mb-2 mb-lg-0">
                         <CartWidget cant={6}/>
                    </ul>
               </div>
          </nav>
          </>
     )
}

export default NavBar;