import React, { useRef } from "react";

export default function EditItemForm(props) {
  // const { user_id } = useSelecter((state) => state.user);
  const nameRef = useRef("");
  const priceRef = useRef("");
  const linkRef = useRef("");
  const descriptionRef = useRef("");
  const imgLinkRef = useRef("");

  const updateItem = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const link = linkRef.current.value;
    const description = descriptionRef.current.value;
    const img = imgLinkRef.current.value;

    fetch(`/items/?item_id=${props.tableData[props.currID].item_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        link,
        description,
        img,
        price,
      }),
    })
      .then((updateItemResponse) => {
        if (updateItemResponse.status === 204) {
          const newTable = structuredClone(props.tableData);
          newTable[props.currID] = {
            item_id: props.tableData[props.currID].item_id,
            name,
            link,
            description,
            img,
            price,
          };
          props.replaceAllItems(newTable)
        }
      })
      .catch((err) => console.log(err));
    props.setItemFormVisible(false);
    return;
  };

  return (
    <div className="fixed z-50 flex w-screen h-screen bg-opacity-25 bg-black justify-center align-middle">
      <div className="flex w-fit h-fit align-middle">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Edit Item</h2>
            <form onSubmit={updateItem}>
              <label className="label" htmlFor="name">
                <span className="label-text">Item Name</span>
              </label>
              <input
                name="name"
                type="text"
                ref={nameRef}
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />

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
              <button
                onClick={() => props.setItemFormVisible(false)}
                className="btn btn-primary"
              >
                Cancel
              </button>
              <button onClick={updateItem} className="btn btn-primary">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
