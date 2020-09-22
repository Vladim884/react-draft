import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../redux/actions";

const ServerData = (props) => {
  const dispatch = useDispatch();
  const getData = () => dispatch(loadData({}));
// console.log(props.serverData);
const myData = props.serverData;
const myNewData = useSelector(state => state.putData.data);
console.log(myNewData);
  return (
    <div className="lorem">
      <h2>My server Data (from saga)</h2>
      
  <p>My server-id: {Object.keys(myNewData).length != 0?myNewData.userId
  : 'no data'}
  
 
  </p>
  <p>My server-title: {Object.keys(myNewData).length != 0?myNewData.title: 'no data'}</p>
      <button onClick={getData}>Get Data</button>
    </div>
  );
};

export default ServerData;
