import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateItems } from "../reducers/itemsReducer.js";
import AuthRequired from "./AuthRequired.js";
import ItemsTable from "../components/ItemsTable.js";

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
          dispatch(updateItems([
            {
              item_name: "Candle1",
              description: "A nice canlde",
              price: 9.99,
              link: "http://google.com",
            },
            {
              item_name: "Candelabra",
              description: "candle holder",
              price: 9.99,
              link: "http://google.com",
            },
            {
              item_name: "Incense",
              description: "stick",
              price: 9.99,
              link: "http://google.com",
            },
            
          ]));
        }}
      >
        Fetch items
      </button>
      {JSON.stringify(items)}
      <br></br>
      {items?.length && <ItemsTable tableData={items} />}
    </>
  );
};
