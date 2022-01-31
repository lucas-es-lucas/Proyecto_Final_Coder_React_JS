const NavBar = (props) => {
     let menu1 = 'Americanos', menu2 = 'Europeos', menu3 = 'Latinoamericanos', menu4 = 'Asiáticos';
     let medida = '100';
     return (
          <>
          <ul className="menu">
               <h1 className="menu__titulo">Limited Edition</h1>
               <img className="menu__logo" src={props.logo} width={medida} alt={props.alt}></img>
               <li className="menu__btn">{menu1}</li>
               <li className="menu__btn">{menu2}</li>
               <li className="menu__btn">{menu3}</li>
               <li className="menu__btn">{menu4}</li>
          </ul>
          </>
     )
}

export default NavBar;