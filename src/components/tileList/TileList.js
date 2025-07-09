import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {
  return (
    <div>
      {array.map((a, index) => {
        const {name, ...description } = a;
        return <Tile key={index} name={name} description={description}/>
})}
    </div>
  );
};