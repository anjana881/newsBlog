const Button = ({ number, size, ...props }) => {
  return (
    <div>
      <button className={`size-${size}`} onClick={props.handleChange}>
        {props.text}
        {number}
      </button>
      {/* <button>{props.number}</button> */}
    </div>
  );
};
export default Button;
