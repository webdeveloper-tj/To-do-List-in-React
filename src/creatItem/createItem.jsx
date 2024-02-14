import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Firebase/config";

function CreateItem({ setCreate, create, setChangeCollapse, changeCollapse }) {
  let data = new Date();
  let fullDate =
    data.getFullYear() +
    "/" +
    (data.getMonth() + 1) +
    "/" +
    data.getDate() +
    "/" +
    data.getHours() +
    ":" +
    data.getMinutes();
  const [title, setTile] = useState("");
  const [description, setDeccription] = useState("");
  const navigate = useNavigate();

  const createItem = async (e) => {
    e.preventDefault();
    const doc = { title: title, description: description, fullDate: fullDate };
    try {
      const ref = collection(db, "items");

      await addDoc(ref, doc);
    } catch (e) {
      console.log(e);
    }
    setTile("");
    setDeccription("");
    navigate("/");
  };
  const handleCansel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="mb-5">
      <div className="collapse container show" id="contentId">
        <h1 className="text-center mb-1">Creating new List</h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              placeholder="Enter title here"
              onChange={(e) => setTile(e.target.value)}
              value={title}
            />
          </div>
          <div className="form-group">
            <label htmlFor="descrption">Descripion</label>
            <textarea
              rows="8"
              type="text"
              className="form-control"
              id="descrption"
              placeholder="Enter description here"
              onChange={(e) => setDeccription(e.target.value)}
              value={description}
            />
          </div>
          <button
            type="submit"
            className="btn  text-primary mr-3"
            style={{ background: "#cccccc" }}
            onClick={(e) => handleCansel(e)}
          >
            Cancel
          </button>
          {title !== "" && description !== "" && (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => createItem(e)}
            >
              Create
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default CreateItem;
