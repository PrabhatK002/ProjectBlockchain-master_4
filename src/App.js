import React from "react";
import "./App.css";

// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Sidebar from './components/Sidebar';
import { Routes } from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import DocDashboard from "./pages/DocDashboard";
import PatDashboard from "./pages/PatDashboard";
import SignupdocPage from "./pages/signupDoc";
import Docdetail from "./pages/Docdetail";
import Patdetail from "./pages/Patdetail";
import Docaccess from "./pages/Docaccess";
import Grantrevoke from "./pages/Grantrevoke";
import Revoke from "./pages/Revoke";
import DocUpload from "./pages/DocUpload";
//import PatUpload from "./pages/PatUpload";
import Pataccess from "./pages/Pataccess";
import SignupPharmapage from "./pages/signupPharma";
import PharDashboardpage from "./pages/PharDashboard";
import Phardetail from "./pages/Phardetail";
import PharAccess from "./pages/PharAccess";
import PharUpload from "./pages/PharUpload";
import SignupLabpage from "./pages/SignupLab";
import LabDashboardpage from "./pages/LabDashboard";
import Labdetail from "./pages/Labdetail";
import LabAccess from "./pages/LabAccess";
import LabUploadpage from "./pages/LabUpload";
import SignupInpage from "./pages/signupIn";
import PatPage from "./pages/PatEntry";
import DocPage from "./pages/DocEntry";
import LabPage from "./pages/LabEntry";
import PharmaPage from "./pages/PharmaEntry";
import InPage from "./pages/InEntry";
import ResPage from "./pages/ResEntry";

import InDashboardpage from "./pages/InDashboard";
import ResDashboardpage from "./pages/ResDashboard";
import Indetail from "./pages/Indetail";
import Resdetail from "./pages/Resdetail";
import InAccess from "./pages/InAccess";
import ResAccess from "./pages/ResAccess";
import InUploadpage from "./pages/InUpload";
import ResUploadpage from "./pages/ResUpload";
import SignupRespage from "./pages/signupRes";

import {ContractAbi }from "./contract.js";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers"

function App() {

  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  /*const contractAddress = "0x44F6981293FB89088c8be5E087a3eC8d4c0DFaf6";
  const contractABI = ContractAbi;
  const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );
  const signerContract = contract.connect(signer);*/
  
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x44F6981293FB89088c8be5E087a3eC8d4c0DFaf6";
      const contractABI = ContractAbi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.JsonRpcProvider("http://localhost:7545");

          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signup" element={<SigninPage stare={state} />}  />
        <Route path="/signupDoc" element={<SignupdocPage />} />
        <Route path="/signupPharma" element={<SignupPharmapage />} />
        <Route path="/SignupLab" element={<SignupLabpage />} />
        <Route path="/SignupIn" element={<SignupInpage />} />
        <Route path="/SignupRes" element={<SignupRespage />} />

        <Route path="/PatEntry" element={<PatPage />} />
        <Route path="/DocEntry" element={<DocPage />} />
        <Route path="/PharmaEntry" element={<PharmaPage />} />
        <Route path="/LabEntry" element={<LabPage />} />
        <Route path="/InEntry" element={<InPage />} />
        <Route path="/ResEntry" element={<ResPage />} />

        <Route path="/DocDashboard" element={<DocDashboard />} />
        <Route path="/PatDashboard" element={<PatDashboard />} />
        <Route path="/PharmaDashboard" element={<PharDashboardpage />} />
        <Route path="/LabDashboard" element={<LabDashboardpage />} />
        <Route path="/InDashboard" element={<InDashboardpage />} />
        <Route path="/ResDashboard" element={<ResDashboardpage />} />

        <Route path="/Docdetail" element={<Docdetail />} />
        <Route path="/Patdetail" element={<Patdetail />} />
        <Route path="/Pharmadetail" element={<Phardetail />} />
        <Route path="/Labdetail" element={<Labdetail />} />
        <Route path="/Indetail" element={<Indetail />} />
        <Route path="/Resdetail" element={<Resdetail />} />

        <Route path="/accessRec" element={<Docaccess />} />
        <Route path="/accessPrec" element={<Pataccess />} />
        <Route path="/PharmaAccess" element={<PharAccess />} />
        <Route path="/LabaccessRec" element={<LabAccess />} />
        <Route path="/InaccessRec" element={<InAccess />} />
        <Route path="/ResaccessRec" element={<ResAccess />} />

        <Route path="/graRev" element={<Grantrevoke />} />
        <Route path="/Rev" element={<Revoke />} />

        <Route path="/Uploadrec" element={<DocUpload />} />
        {/* <Route path="/UploadPrec" element={<PatUpload />} /> */}
        <Route path="/PharmaUpload" element={<PharUpload />} />
        <Route path="/LabUploadrec" element={<LabUploadpage />} />
        <Route path="/InUploadrec" element={<InUploadpage />} />
        <Route path="/ResUploadrec" element={<ResUploadpage />} />

        <Route path="/logout" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
