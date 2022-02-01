import style from './Counter.module.css';

const Counter = (props) => {
     return (
          <>
          <span className={style.counter}>{props.cant}</span>
          </>
     )
}

export default Counter;