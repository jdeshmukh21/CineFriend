import { AllRoutes } from "./routes/Allroutes";
import {Header, Footer} from "./components";
import { useState } from "react";
import "./App.css";
import './index.css';


function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />

    </>
  );
}

export default App;
