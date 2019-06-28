import React from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header branding="Contact Manager" />
      <Contact
        phone="555-555-555"
        email="hasitha.chandula@gmail.com"
        address="345"
      />
      <Contact
        phone="111-111-111"
        email="tirosha.ramanayaka@gmail.com"
        address="345"
      />
    </div>
  );
}
export default App;
