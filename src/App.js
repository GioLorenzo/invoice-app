import Button1 from "./components/Button1.js";
import Button2 from "./components/Button2.js";
import Button5 from "./components/Button5.js";


function App() {
  return (
    <>
      <Button1 classList="button-1 btn" text="New Invoice"/>
      <Button2 classList="button-2 btn" text="Mark as Paid"/>
      <Button5 classList="button-5 btn" text="Delete"/>
    </>
  );
}

export default App;
