import { Fragment } from "react"; // as a shortcut we need to import it, we can just write <> in place of <Fragment> wihout importing it.
import { MouseEvent } from "react";
import { useState } from "react";

// Passing data using pros: {items: [], heading:string} - this is sachieved using interface.
interface Props {
  items: string[];
  heading: string;
  // Passing Function using Prop

  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  // Rendering the list Dynamically.
  //let items = ["Lahore", "Karachi", "Islamabad", "Sialkot", "Faisalabad"];
  //items = [];

  // Since we can't use for loop in returning react component we need to render array as:
  //items.map((item) => <li>{item}</li>);

  // Conditional Rendering - but we need to write it in react component instead.

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List Group</h1>
  //         <p>No Items Found!</p>
  //       </>
  //     );
  //}

  //const message = items.length === 0 ? <p>No items Found!</p> : null;
  // We need to write className instead of class as it is a reserve keyword in TS.

  // We can only use Arrow functions, Simple Functions can't be used!
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No items Found!</p> : null;
  //   };

  // Event Handler
  const handleEvent = (event: MouseEvent) => console.log(event);

  //let selectedIndex = 0;

  // State Management in React using built-in useState function - called hook

  // Hook - tells react component that it can have data that can change over time
  // Remember each react component has their own state, if we add another instance of this component they will have different state- independent of each other.
  const [selectedIndex, setSeletedIndex] = useState(-1);

  return (
    //<h1></h1>   // Don't Allow as we can't return multiple html components im react component, to-do so we need to wrap it in a single div.
    // but this also adding an unnecessary element to react so instead we use Fragments.
    //<Fragment> <> can be used instead.

    <>
      <h1>{heading}</h1>
      {/* //Conditional Rendering using turnary operator.
      {items.length === 0 ? <p>No items Found!</p> : null}
      This is not recommended as it can pollute over code, so we need
      to write it in a single variable -> message above. or getMessage() function */}
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <p>No items Found!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={(event) =>
            //   console.log(
            //     "You Clicked:",
            //     item,
            //     "| At index: ",
            //     index,
            //     "\n",
            //     event
            //   )
            // }

            // onClick={handleEvent}

            // onClick={() => {
            //   selectedIndex = index;
            // }}

            // to make the item to be selected when clicked dynamically.
            onClick={() => {
              setSeletedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </> //</Fragment>
  );
}

export default ListGroup;

/*
    Difference between Props and State.

    - PROPS or properties are input passed to a component while STATE is data managed by component.
    - PROPS are like function arguments and STATE is like local variables.
    - PROPS are immutable while STATE is mutable.
    - Whenever PROPS and STATE changed it re-render the react component.




*/
