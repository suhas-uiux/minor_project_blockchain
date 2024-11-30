import {useState} from 'react';
import "./Display.css"
const Display=({contract,account})=>{
  const [data,setData]=useState("")
  const getdata=async()=>{
    let dataArray;
    const otheraddress=document.querySelector(".address").value;
    if(otheraddress){
      dataArray=await contract.display(otheraddress);
      console.log(dataArray);
    }else{
      dataArray=await contract.display(account)
    }
    const isEmpty=Object.keys(dataArray).length===0;
    if(!isEmpty){
      const str=dataArray.toString();
      const str_array=str.split(",");
      console.log(str)
      console.log(str_array)
    }else{
      alert("no image to display")
    }
  };
  return(
  <>
    <div className='image-list'>Image Display</div>
    <input type="text" placeholder='Enter Address' className='address'></input>
    <button className='center button' onClick={getdata}>Get data</button>
  </>
  );
};
export default Display;