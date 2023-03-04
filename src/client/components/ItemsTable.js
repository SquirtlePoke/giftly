import React from "react";

export default function ItemsTable(props) {
  const tableData = props.tableData;
  return (
    <div className="overflow-x-auto shadow-xl">
      <table className="table w-full">
        <thead>
          <tr>
            <th className="bg-secondary"></th>
            <th className="bg-secondary">Item</th>
            <th className="bg-secondary">Description</th>
            <th className="bg-secondary">Price</th>
            <th className="bg-secondary">Link</th>
            <th className="bg-secondary">Edit</th>
          </tr>
          {tableData.map((item, index) => {
            return (
              <tr className="hover" key={crypto.randomUUID()}>
                <th className="bg-base-100">{index + 1}</th>
                <td className="bg-base-100">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src="https://images.uncommongoods.com/images/items/46100/46106_1_640px.jpg" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.item_name}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-base-100">{item.description}</td>
                <td className="bg-base-100">{item.price}</td>
                <td className="bg-base-100">{item.link}</td>
                <td className="bg-base-100">
                  <div
                    onClick={() => {
                      props.setID(index);
                      props.setItemFormVisible(true);
                    }}
                    className="cursor-pointer card card-compact bg-base-100"
                    style={{ cursor: "pointer" }}
                  >
                    EDIT ITEM
                  </div>
                </td>
              </tr>
            );
          })}
        </thead>
      </table>
      <div
        onClick={() => {
          props.setFormVisible(true);
        }}
        className="cursor-pointer card card-compact bg-base-100 shadow-xl w-full h-72 hover:scale-105 transition-all flex justify-center align-middle"
        style={{ cursor: "pointer" }}
      >
        Add a new item
      </div>
    </div>
  );
}
