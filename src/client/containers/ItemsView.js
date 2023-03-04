import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { updateItems } from "../reducers/itemsReducer.js";
import AuthRequired from "./AuthRequired.js";
import ItemsTable from "../components/ItemsTable.js";
import AddItemForm from "../components/AddItemForm";

export default function ItemsView(props) {
  const { items } = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const {collection_id} = useLocation().state;

  const [formVisible, setFormVisible] = useState(false);

  const updateItems2 = (newItem) => {
    dispatch(updateItems([...items, newItem]))
  }
  
  // * On componentDidMount, GET the list of items from the server for the current collection
  useEffect(() => {
    fetch(`http://localhost:3000/items/?collection_id=${collection_id}`)
    .then(serverResponse => serverResponse.json())
    .then(responseJson => dispatch(updateItems(responseJson)))
    .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <AuthRequired />
      {formVisible && <AddItemForm setFormVisible={setFormVisible} collection_id={collection_id} tableData={items} updateItems2={updateItems2}/>}
      <h1>ItemsView</h1>
      <br></br>
      {items?.length && (
        <div className="w-screen flex justify-center">
          <ItemsTable tableData={items} setFormVisible={setFormVisible} />
        </div>
      )}
    </>
  );
};
