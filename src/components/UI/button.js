import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick} // forward this to props.onClick
    >
      {props.children}
    </button>
  );
};

export default Button;
