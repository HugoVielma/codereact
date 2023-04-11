const ItemListContainer = (props) => {
  const { greeting } = props;
  return (
    <main>
      <h1 style={{ fontSize: "54px", fontWeight: "bold" }}>{greeting}</h1>
      <p id="coloreando">mi primer P</p>
    </main>
  );
};
export default ItemListContainer;
