// eslint-disable-next-line react/prop-types
function Button({ text, onClick }) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}

export default Button;
