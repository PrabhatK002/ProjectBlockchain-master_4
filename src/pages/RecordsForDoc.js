import React, { useState } from "react";
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm/Login';
//import SignIn from '../components/Signin/index.js'
import Ddashboard from '../components/Ddashboard/Ddashboard';
import Ddetail from "../components/Ddashboard/Ddetail";
import RecordsByDoc from "../components/Ddashboard/RecordsByDoc";


const RecordsForDocPage = ({state}) => {
  console.log(state, 'docr');
  return (
    <>
      <Ddashboard/>  
      <RecordsByDoc state={state} />
    </>
  );
};

export default RecordsForDocPage;