import styles from "./Input.module.css";

import PropTypes from "prop-types";

export const Input = (props) => {
  return (
    <div className={styles.Input}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        className={props.className}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export const TitleInput = () => {
  return (
    <div className={styles.Title}>
      <label htmlFor="title">제목</label>
      <input type="text" id="title" required />
    </div>
  );
};
