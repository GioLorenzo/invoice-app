import Button1 from "./components/Button1.js";
import Button2 from "./components/Button2.js";
import Button3 from "./components/Button3.js";
import Button4 from "./components/Button4.js";
import Button5 from "./components/Button5.js";
import Button6 from "./components/Button6.js";
import Dropdown from "./components/Dropdown.js";
import ThemeToggle from "./components/ThemeToggle.js";


function App() {
  return (
    <>
      {/* theme toggle for light/dark button*/}
      <ThemeToggle />
      
      <Button1 classList="button-1 btn" text="New Invoice"/>
      <Button2 classList="button-2 btn" text="Mark as Paid"/>
      <Button3 classList="button-3 btn light-theme" text="Edit"/>
      <Button4 classList="button-4 btn light-theme" text="Save as Draft"/>
      <Button5 classList="button-5 btn" text="Delete"/>
      <Button6 classList="button-6 btn" text="Add New Item" />
      <Dropdown text='Payment Terms' option1='Net 1 Day' option2='Net 7 Days' option3='Net 14 Days' option4='Net 30 Days'/>
    </>
  );
}

export default App;
