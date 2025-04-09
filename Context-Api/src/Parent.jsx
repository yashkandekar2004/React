import React from "react";
import { useState } from "react";
import Header from "./component/Header";
import "./App.css"
import ProductList from "./component/ProductList";

import { countContext } from "./contextFile";
function Parent() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        <Header />
        <ProductList />
      </countContext.Provider>
    </div>
  );
}

export default Parent;
export { countContext };
