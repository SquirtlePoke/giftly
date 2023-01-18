import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionsList from "../components/CollectionsList.js";

import { updateCollection } from "../reducers/collectionsReducer.js";
import AuthRequired from "./AuthRequired.js";

export default function CollectionsView() {
  const { collections } = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  
  // * On componentDidMount, GET the list of collections from the server for the current user
  useEffect(() => {
    fetch(`http://localhost:3000/collections/?user_id=${""}`)
    // .then(serverResponse => serverResponse.json())
    // .then(responseJson => dispatch(updateCollection(responseJson)))
    .then(responseJson => dispatch(updateCollection([{ name: "Collection 1", item_count: 20 },{ name: "Collection Two", item_count: 20 },{ name: "Third Collection", item_count: 13 }])))
    .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <AuthRequired />
      <h1>CollectionsView</h1>
      {collections?.length && (
        <div className="w-screen justify-center">
          <CollectionsList listData={collections} />
        </div>
      )}
    </>
  );
};
