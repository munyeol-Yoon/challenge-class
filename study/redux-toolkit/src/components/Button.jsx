function Button({ label, onClick: handleClick }) {
  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
