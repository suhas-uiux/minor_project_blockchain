# **Decentralized Identity System Using Blockchain** 🌐

## **Overview**

This project is a **Blockchain-based Decentralized Identity System** that securely manages user-uploaded files and their associated metadata in a decentralized manner. It combines the power of **IPFS**, **smart contracts**, and **Web3 authentication** to create a trustless system where data integrity, transparency, and security are paramount.

By leveraging **Ethereum blockchain**, **MetaMask authentication**, and **decentralized file storage using IPFS via Pinata**, this project ensures that every file and its identity are verifiable, tamper-proof, and accessible without relying on a central authority.

---

## **Features & Highlights**

### **1. Authentication & Security**
- Users authenticate securely through **MetaMask**, a widely used Ethereum wallet.
- This Web3 login ensures seamless access to blockchain services and eliminates the need for traditional logins/passwords.

### **2. Decentralized File Management**
- Users can upload files directly through the web interface.
- Files are uploaded to **IPFS (InterPlanetary File System)** using the **Pinata API**, a gateway to managing IPFS content with ease.
- Each uploaded file returns a **unique content hash** (CID), which acts as a decentralized identifier for the file.

### **3. Smart Contracts on Ethereum**
- Every file upload triggers a function in a **Solidity smart contract** deployed on the Ethereum network.
- The smart contract:
  - Records the file’s IPFS hash.
  - Associates the file with the user’s Ethereum address.
  - Stores metadata like timestamp and a unique file ID.
- This interaction ensures **immutability** and **verifiability** of data.

### **4. End-to-End Blockchain Integration**
- From **user authentication** to **file upload**, **hash generation**, and **block creation**, the entire workflow is decentralized.
- The front-end interacts with the smart contract using **Ethers.js**, providing smooth, reliable Web3 interactions.

---

## **Tech Stack**

| **Layer**         | **Technology**          | **Description**                                               |
|-------------------|-------------------------|---------------------------------------------------------------|
| Blockchain        | **Ethereum**, **Solidity** | Smart contract logic, hash storage, decentralized registry    |
| Web3 Provider     | **MetaMask**             | User authentication and transaction signing                   |
| File Storage      | **IPFS**, **Pinata API** | Decentralized file storage and pinning service                |
| Frontend          | **React.js**             | User interface and interaction layer                          |
| Web3 Library      | **Ethers.js**            | Blockchain communication and smart contract interaction       |
| Dev Tooling       | **Hardhat**              | Smart contract development, testing, and deployment framework |

---

## **Architecture**

1. **User Login** via MetaMask.
2. **File Upload** via the frontend.
3. File is pinned using **Pinata**, returned IPFS hash.
4. IPFS hash and file metadata sent to a **Solidity Smart Contract**.
5. Data is **stored immutably** on the Ethereum blockchain.
6. Users can **verify ownership and details** using their Ethereum wallet address.

---

## **Smart Contract Overview**

- Written in **Solidity**.
- **Functions**:
  - `uploadFile(ipfsHash, fileName)` — stores file hash and metadata.
  - `getUserFiles(address)` — returns all files uploaded by a user.
  - `getFileDetails(fileId)` — retrieves individual file details.
- **Events** emitted for:
  - File uploads.
  - File access.

---

## **Challenges Faced**

### **1. Understanding Web3 Ecosystem**
- Learning how MetaMask, smart contracts, Ethers.js, and IPFS work in tandem.
- Gaining insights into decentralized architectures and public key authentication.

### **2. Toolchain Integration**
- Managing async interactions between:
  - Pinata API & IPFS.
  - Ethers.js & Smart Contracts.
  - MetaMask & user session handling.

### **3. Workflow Design**
- Building a fluid experience from file upload to blockchain storage.
- Ensuring error-handling and fallback mechanisms in decentralized environments.

---

## **Key Takeaways**

- **Decentralization** is the future — ensuring data trust and transparency without central control.
- Gained a deeper understanding of **blockchain-based identity systems**.
- Enhanced skills in **smart contract development**, **React-based DApps**, and **Web3 tools**.
- Built a strong foundation for exploring further into the decentralized internet.

---


---

## **Future Improvements**

- Add support for verifying file integrity through hash comparison.
- Implement role-based access control for shared file visibility.
- Add ENS (Ethereum Name Service) support for user-friendly identities.
- Enable multi-file uploads with batch processing.

---

## **Let’s Connect**

If you’re passionate about blockchain, Web3, or decentralized systems, feel free to connect. I’d love to collaborate or discuss ideas around these technologies.
