import React, { useRef } from "react";
import { useSelector } from "react-redux";

export default function AddCollectionForm(props) {
  
  const { user_id } = useSelecter((state) => state.user);
  const nameRef = useRef("");

  const createNewCollection = (event) => {
    event.preventDefault();
    fetch(`/collections/?user_id=${user_id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameRef.current.value })
    });
    props.setFormVisible(false);
    return;
  };

  return (
    <div className="fixed z-50 flex w-screen h-screen bg-opacity-25 bg-black justify-center align-middle">
      <div className="flex w-fit h-fit align-middle">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Create a New Collection</h2>
            <form onSubmit={createNewCollection}>
              <label className="label" htmlFor="name">
                <span className="label-text">Collection Name</span>
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
            </form>
            <div className="card-actions justify-end">
              <button onClick={() => props.setFormVisible(false)} className="btn btn-primary">Cancel</button>
              <button onClick={createNewCollection} className="btn btn-primary">Create</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
