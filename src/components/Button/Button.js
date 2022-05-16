const Button = ({ handleClick, textButton }) => {
  return <button onClick={handleClick}>{textButton}</button>;
};

export default Button;
