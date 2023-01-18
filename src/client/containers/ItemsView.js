import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateItems } from "../reducers/itemsReducer.js";
import AuthRequired from "./AuthRequired.js";

export default function ItemsView() {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();
  
  // * On componentDidMount, GET the list of items from the server for the current collection
  useEffect(() => {
    fetch(`http://localhost:3000/items?collection_id=${""}`)
    .then(serverResponse => serverResponse.json())
    .then(responseJson => dispatch(updateItems(responseJson)))
    .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <AuthRequired />
      <h1>ItemsView</h1>
      <button
        onClick={() => {
          dispatch(updateItems(["item1", "item2", "item3"]));
        }}
      >
        update items
      </button>
      {JSON.stringify(items)}
    </>
  );
};
