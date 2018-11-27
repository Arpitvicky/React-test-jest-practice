import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faEdit } from "@fortawesome/free-solid-svg-icons";

library.add(faTimes);
library.add(faEdit);

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
