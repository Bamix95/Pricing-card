import style from "./card.module.css";
import PropTypes from "prop-types";
const Card = ({ title, currency, price, storage, users, send }) => {
  return (
    <div className={style.card_wrapper}>
      <h4 className={style.title}>{title}</h4>
      <div className={style.price}>
        <h3>{currency}</h3>
        <h1>{price}</h1>
      </div>
      <div className={style.item}>
        <p>{storage}</p>
        <p>{users}</p>
        <p>{send}</p>
      </div>
      <button>Learn More</button>
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string,
  currency: PropTypes.string,
  price: PropTypes.number,
  storage: PropTypes.string,
  users: PropTypes.string,
  send: PropTypes.string,
};
export default Card;
