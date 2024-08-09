// eslint-disable-next-line react/prop-types
function List({ items }) {
  return (
    <>
      <h1>Fruits List:</h1>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
