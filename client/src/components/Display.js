import { useState } from "react";
import "./Display.css";
const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
  const getdata = async () => {
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        dataArray = await contract.display(account);
      }
      
      if (!dataArray || dataArray.length === 0) {
        alert("No image to display");
        setData(""); // Clear the data state
        return; // Exit early to avoid further processing
      }
  
      // Process the dataArray if it exists and is not empty
      const str = dataArray.toString();
      const str_array = str.split(",");
      const images = str_array.map((item, i) => (
        <a href={item} key={i} target="_blank" rel="noopener noreferrer">
          <img
            key={i}
            src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
            alt="new"
            className="image-list"
          ></img>
        </a>
      ));
      setData(images);
    } catch (e) {
      console.error("Error fetching data:", e); // Log the actual error
      alert("You don't have access");
    }
  };
  
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
      <button className="center button" onClick={getdata}>
        Get Data
      </button>
    </>
  );
};
export default Display;