// import Comic from '../Comic/Comic';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import styles from './ItemListContainer.module.css';

const ItemListContainer = (props) => {
//      let Comics = 
// [
//      {
//           "id": 0,
//           "id_comic": 550988,
//           "title": 'TDKR',
//           "editorial": 'Norma',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 13000
//      },
//      {
//           "id": 1,
//           "id_comic": 568620,
//           "title": 'Watchmen',
//           "editorial": 'Planeta',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 20000 
//      },
//      {
//           "id": 2,
//           "id_comic": 580489,
//           "title": 'From Hell',
//           "editorial": 'Planeta',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 18000 
//      },
//      {
//           "id": 3,
//           "id_comic": 566525,
//           "title": 'The Invisibles 3',
//           "editorial": 'Vertigo',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 3700 
//      },
//      {
//           "id": 4,
//           "id_comic": 597316,
//           "title": 'Gideon Falls 16',
//           "editorial": 'Image',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 1100
//      },
//      {
//           "id": 5,
//           "id_comic": 859860,
//           "title": 'Cosmic Odissey',
//           "editorial": 'ECC',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 5000 
//      },
//      {
//           "id": 6,
//           "id_comic": 588921,
//           "title": 'Black Monday Murders 2',
//           "editorial": 'Image',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 2500
//      },
//      {
//           "id": 7,
//           "id_comic": 725273,
//           "title": 'Monsters',
//           "editorial": 'Fantagraphics',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 8000 
//      },
//      {
//           "id": 8,
//           "id_comic": 597891,
//           "title": 'Monster 13',
//           "editorial": 'Ivrea',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 900 
//      },
//      {
//           "id": 9,
//           "id_comic": 451048,
//           "title": 'Evangelion Completo',
//           "editorial": 'Ivrea',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 30000 
//      },
//      {
//           "id": 10,
//           "id_comic": 385128,
//           "title": 'El Incal',
//           "editorial": 'Norma',
//           "cover": 'https://comicbooksandcats.files.wordpress.com/2015/11/the-dark-knight-returns-1-cover.png',
//           "cover_size": '100px',
//           "price": 15000
//      },
// ];

     return (
     <>
          <h3 className = {styles.greeting}>{props.greeting}</h3>
          <ItemList></ItemList>
     </>
     );
}
export default ItemListContainer;