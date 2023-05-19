import React from "react";
import StarRating from "./StarRating";

const CardRating = ({ data }) => {
  return (
    <div className="my-4 mr-2 overflow-hidden bg-white drop-shadow-md rounded-2xl">
      <img src={data.linkImg} className="object-cover w-full h-40" />
      <div className="p-5 border border-b">
        <h1 className="py-2 truncate">{data.title}</h1>
        <StarRating rating={data.rating} />
      </div>
    </div>
  );
};

export default CardRating;
