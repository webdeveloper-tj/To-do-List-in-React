import { db } from "../Firebase/config";
import { deleteDoc, doc } from "firebase/firestore";
import deleteIcon from "../img/trash-solid.svg";
import useCollection from "../hooks/useCollection";
function Item({ changeCollapse }) {
  const { collectionData: items, isLoarding, error } = useCollection("items");
  const handleDelete = async (id) => {
    try {
      const ref = doc(db, "items", id);
      await deleteDoc(ref);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      {isLoarding && (
        <div className="text-center">
          <span className="spinner-grow bg-danger spinner-grow-lg"></span>
          <span className="display-4 text-center"> Loading...</span>
        </div>
      )}
      {error && (
        <div>
          <div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Error</h4>
            <p className="mb-0">
              In this list no item. Please create any
              <span className="bg-warning px-1 rounded">item</span> or ploblem
              in your network
            </p>
          </div>
        </div>
      )}

      {items &&
        items.map((item, index) => (
          <div className="collapse show" id={item.id} key={index}>
            <div className="jumbotron" style={{ background: "#eeeeee" }}>
              <h1 className="display-4">{item.title}</h1>
              <hr className="mb-3" />
              <span className="p-1 rounded" style={{ background: "#eeeebb" }}>
                {item.fullDate}
              </span>
              <p className="lead mt-3 font-italic"> {item.description} </p>
              <img
                src={deleteIcon}
                alt=""
                className="float-right"
                style={{ width: "25px", cursor: "pointer" }}
                onClick={() => handleDelete(item.id)}
              />
            </div>
          </div>
        ))}
    </div>
  );
}

export default Item;
