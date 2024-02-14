import React, { useState } from "react";
import CreateItem from "./creatItem/createItem";
import Item from "./Item/item";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import sortIcon from "./img/sort.png";
const handleSort = () => {};
function App() {
  return (
    <div>
      <h1 className="display-4 text-center mb-4">To Do List in React</h1>
      <BrowserRouter>
        <p className="container" style={{ display: "flex" }}>
          <Link
            to={"create"}
            className="btn btn-secondary"
            style={{ width: "50px", margin: "0px auto" }}
            title="create new item"
          >
            +
          </Link>
        </p>

        <Routes>
          <Route path="/create" element={<CreateItem></CreateItem>} />
          <Route path="/" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
