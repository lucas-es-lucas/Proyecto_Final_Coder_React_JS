import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';
import logo from '../../media/IMG_1237.JPG';

const Header = () => {
     return (
          <header className={styles.container__menu}>
               <NavBar logo={logo} alt='logo' />
          </header>
     );
}

export default Header;