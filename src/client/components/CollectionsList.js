import React from "react";
import { useNavigate } from "react-router-dom";

export default function CollectionsList(props) {
  const { listData } = props;
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-y-8">
      {listData.map((collection) => {
        return (
          <div 
            onClick={() => navigate("/items")}
            className="cusor-pointer card card-compact bg-base-100 shadow-xl w-[30%]"
            style={{ cursor: "pointer" }}
          >
            <figure>
              <div className="grid grid-cols-2 gap-1 place-content-center h-48">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                <img src="https://placeimg.com/400/226/arch" alt="Shoes" />
                <img src="https://placeimg.com/400/227/arch" alt="Shoes" />
                <img src="https://placeimg.com/400/228/arch" alt="Shoes" />
                {/* <img src={listItem.image_url} alt="Shoes" /> */}
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{collection.name}</h2>
              <p>{collection.item_count} items</p>
              <div className="card-actions justify-end">
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}
