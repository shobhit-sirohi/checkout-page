import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Finalcard from "./components/Finalcard";
import Credits from "./components/Credits";

function App() {
  return (
    <div className="flex  flex-col 2xl:px-96 2xl:pt-32 xl:px-36 xl:pt-16 px-2 pt-2 md:pt-10 md:px-10 h-screen">
      <Header />
      <div className="lg:flex justify-between">
        <div className="lg:order-2">
          <Finalcard />
        </div>
        <Form />
      </div>

      <Credits />
    </div>
  );
}

export default App;
