// import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { Button } from "./components/Button";
import { useState } from "react";
// function App() {
//   //return <div><Message/></div>;    // Calling the message component here.
//   let items = ["Lahore", "Karachi", "Islamabad", "Sialkot", "Faisalabad"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />

//       {/* <br></br>
//       <ListGroup /> */}
//     </div>
//   );
// }

// using the Alert Component now

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {/* <Alert text="Hello World!" /> Passing Content or my be html like this gets
      ugly so we make children prop. */}

      <Alert onClose={() => setAlertVisibility(false)}>
        Computer Science <br></br>
        <span>HI</span> <br />
        <button>Click me</button>
      </Alert>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Button Clicked Alert!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Click me</Button>
    </div>
  );
}

export default App;

// hmr: hot module replacement.
