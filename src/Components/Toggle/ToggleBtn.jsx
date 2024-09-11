import style from "./ToggleBtn.module.css";
import PropTypes from "prop-types";

const ToggleBtn = ({ handleClick }) => {
  return (
    <div>
      <header>Our Pricing</header>
      <div className={style.container}>
        <h2>Annually</h2>
        <input className={style.check_input} type='checkbox' id='toggle' />
        <label
          onClick={handleClick}
          htmlFor='toggle'
          className={style.toggle_wrapper}
        >
          <span className={style.toggle_circle}></span>
        </label>
        <h2>Monthly</h2>
      </div>
    </div>
  );
};

ToggleBtn.propTypes = {
  handleClick: PropTypes.func,
};

export default ToggleBtn;
