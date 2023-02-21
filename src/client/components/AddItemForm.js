import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { updateItems } from "../reducers/itemsReducer.js";
import ItemsTable from "../components/ItemsTable.js";

export default function AddItemForm(props) {
  // const { user_id } = useSelecter((state) => state.user);
  const user_id = 11;
  const nameRef = useRef("");
  const priceRef = useRef("");
  const linkRef = useRef("");
  const descriptionRef = useRef("");
  const imgLinkRef = useRef(""); 

  const createNewItem = (event) => {
    event.preventDefault();
    fetch(`/items/?collection_id=${props.collection_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameRef.current.value, 
                             link: linkRef.current.value, 
                             description: descriptionRef.current.value,
                             image_link: imgLinkRef.current.value,
                             price: priceRef.current.value,
                          })
    });
    props.setFormVisible(false);
    return;
  };

  return (
    <div className="fixed z-50 flex w-screen h-screen bg-opacity-25 bg-black justify-center align-middle">
      <div className="flex w-fit h-fit align-middle">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Add a New Item</h2>
            <form onSubmit={createNewItem}>

              <label className="label" htmlFor="name">
                <span className="label-text">Item Name</span>
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
              <input
                name="name"
                type="text"
                ref={nameRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              {/* <span className="label-text-alt">Alt label</span> */}
              {/* <span className="label-text-alt">Alt label</span> */}

              <label className="label" htmlFor="price">
                <span className="label-text">Item Price</span>
              </label>
              <input
                name="price"
                type="text"
                ref={priceRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label" htmlFor="link">
                <span className="label-text">Item Link</span>
              </label>
              <input
                name="link"
                type="text"
                ref={linkRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label" htmlFor="description">
                <span className="label-text">Item Description</span>
              </label>
              <input
                name="description"
                type="text"
                ref={descriptionRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

              <label className="label" htmlFor="imgLink">
                <span className="label-text">Item Image Link</span>
              </label>
              <input
                name="imgLink"
                type="text"
                ref={imgLinkRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </form>
            <div className="card-actions justify-end">
              <button onClick={() => props.setFormVisible(false)} className="btn btn-primary">Cancel</button>
              <button onClick={createNewItem} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
