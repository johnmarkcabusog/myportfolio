import React from "react";

const PolygonItem = ()=>{
  const poly= []
  for(let i=1; i<= 110;i++){
      poly.push(<div className="polygon-item"></div>)
  }
  return poly
}
const Polygons = () => {
  return (
      <div class="polygon-container">
        <PolygonItem/>
      </div>
  );
};

export default Polygons;
