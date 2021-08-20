import Button1 from "./components/Button1.js";
import Button2 from "./components/Button2.js";
import Button3 from "./components/Button3.js";
import Button4 from "./components/Button4.js";
import Button5 from "./components/Button5.js";
import Button6 from "./components/Button6.js";
import Dropdown from "./components/Dropdown.js";


function App() {
  return (
    <>
      <Button1 classList="button-1 btn" text="New Invoice"/>
      <Button2 classList="button-2 btn" text="Mark as Paid"/>
      <Button3 classList="button-3 btn light-theme" text="Edit"/>
      <Button4 classList="button-4 btn light-theme" text="Save as Draft"/>
      <Button5 classList="button-5 btn" text="Delete"/>
      <Button6 classList="button-6 btn" text="Add New Item" />
      <Dropdown />
    </>
  );
}

export default App;
