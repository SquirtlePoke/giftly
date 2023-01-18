import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { update } from "../reducers/collectionsReducer.js";

export default function CollectionsView() {
  const { collections } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  
  // * On componentDidMount, GET the list of collections from the server for the current user
  useEffect(() => {
    fetch(`http://localhost:3000/collections?user_id=${""}`)
    .then(serverResponse => serverResponse.json())
    .then(responseJson => dispatch(update(responseJson)))
    .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <h1>CollectionsView</h1>
      <button
        onClick={() => {
          dispatch(update([{ name: "Collection 1", items_count: 20 },{ name: "Collection Two", items_count: 20 },{ name: "Third Collection", items_count: 20 }]));
        }}
      >
        update collections
      </button>
      {collections?.map((collection) => collection.name) || ""}
    </>
  );
};
