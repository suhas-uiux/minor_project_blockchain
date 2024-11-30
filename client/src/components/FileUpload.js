import {useState} from "react";
import axios from "axios";
import "./FileUpload.css"
const FileUpload=({account,provider,contract})=>{
    const [file,setFile]=useState(null);
    const [fileName,setFileName]=useState("unable to see the file");
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(file){
            try{
                const formData = new FormData();
                formData.append("file", file);
        
                const resFile = await axios({
                  method: "post",
                  url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                  data: formData,
                  headers: {
                    pinata_api_key:`b12674e52a0bc6525bdd`,
                    pinata_secret_api_key: `cca25d11ba29c972d49a0fd45ad9526473a0641bfe7865c502db7ca6c6478646`,
                    "Content-Type": "multipart/form-data",
                  },
                });
                const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
                console.log("ImgHash:", ImgHash);
                console.log("Account:", account);
                try {
                    const transaction = await contract.add(account, ImgHash);
                    await transaction.wait();
                    console.log("Transaction successful");
                  } catch (error) {
                    console.error("Error during contract call:", error);
                    console.error("Error details:", error.response || error);  // Log more details
                    alert("An error occurred: " + error.message); // Provide a user-friendly alert
                  }
                  
                alert("Successfully Image Uploaded");
                setFileName("No image selected");
                setFile(null);
            }
            catch(e){
                alert("unable to upload the image from pinata");
            }
        }
        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
    };
    const retriveFile=(e)=>{
        const data = e.target.files[0]; //files array of files object
        //console.log(data);
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(data);
        reader.onloadend = () => {
          setFile(e.target.files[0]);
        };
        setFileName(e.target.files[0].name);
        e.preventDefault();
    };

    return(
        <div className="top">
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="file-upload" className="choose">
                CHOOSE IMAGE
            </label> 
                <input disabled={!account} type="file" id="file-upload" name="data" onChange={retriveFile}/> 
              <span className="textArea"> Image:{fileName}</span>
                <button type="submit" className="upload" disabled={!file}>UPLOAD IMAGE</button>
        </form>
    </div>); 
};
export default FileUpload;