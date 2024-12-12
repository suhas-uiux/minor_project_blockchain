import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Use a public testnet (Goerli) provider instead of the local provider
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:8545" // Replace with your Infura/Alchemy RPC URL
    );

    const loadProvider = async () => {
      if (provider) {
        try {
          // Request wallet connection through MetaMask
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setAccount(accounts[0]); // Set the user's account

          // Listen for account or chain changes
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          const signer = provider.getSigner();
          const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your deployed contract address
          const contract = new ethers.Contract(
            contractAddress,
            Upload.abi,
            signer
          );

          setContract(contract);
          setProvider(provider);
        } catch (error) {
          console.error("Error connecting to MetaMask or provider:", error);
        }
      } else {
        console.error("MetaMask is not installed. Please install it to continue.");
      }
    };

    loadProvider();
  }, []);

  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>Decentralize identity system</h1>
        <div className="bg"></div>
       

        <p style={{ color: "white" }}>
          Account: {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
      </div>
    </>
  );
}

export default App;
