import Alert from "./exercises/02-Alert";
import Button from "./exercises/01-Button";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
