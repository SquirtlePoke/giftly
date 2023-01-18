import React from "react";

export default function ItemsTable(props) {
  const { tableData } = props;
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Item</th>
            <th>Description</th>
            <th>Price</th>
            <th>Link</th>
          </tr>
          {tableData.map((item, index) => {
            return (
              <tr key={crypto.randomUUID()}>
                <th>{index}</th>
                <td>{item.item_name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.link}</td>
              </tr>
            );
          })}
        </thead>
      </table>
    </div>
  );
}
