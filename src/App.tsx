import ListGroup from "./components/02-Props";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
