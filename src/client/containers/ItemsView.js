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
  
  // * On componentDidMount, GET the list of items from the server for the current collection
  useEffect(() => {
    fetch(`http://localhost:3000/items/?collection_id=${collection_id}`)
    .then(serverResponse => serverResponse.json())
    .then(responseJson => dispatch(updateItems(responseJson)))
    // .then(() => dispatch(updateItems([
    //   {
    //     item_name: "Candle1",
    //     description: "A nice canlde",
    //     price: 9.99,
    //     link: "http://google.com",
    //   },
    //   {
    //     item_name: "Candelabra",
    //     description: "candle holder",
    //     price: 9.99,
    //     link: "http://google.com",
    //   },
    //   {
    //     item_name: "Incense",
    //     description: "stick",
    //     price: 9.99,
    //     link: "http://google.com",
    //   },])))
    .catch(err => console.warn(err));
  }, [])

  return (
    <>
      <AuthRequired />
      {formVisible && <AddItemForm setFormVisible={setFormVisible} collection_id={collection_id} />}
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
