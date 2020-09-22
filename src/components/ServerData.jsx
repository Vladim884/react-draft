import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { loadData } from "../redux/actions";

const ServerData = (props) => {
  const dispatch = useDispatch();
  const getData = () => dispatch(loadData({}));
// console.log(props.serverData);
const myData = props.serverData
  return (
    <div className="lorem">
      <h2>My server Data (from saga)</h2>
      
  <p>My server-id: {Object.keys(myData).length != 0?myData.userId
  : 'no data'}
  
 
  </p>
  <p>My server-title: {Object.keys(myData).length != 0?myData.title: 'no data'}</p>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default ServerData;
