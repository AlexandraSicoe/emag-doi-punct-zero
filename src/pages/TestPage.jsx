import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dashboard from "../components/Dashboard.jsx";
import { toast } from "react-toastify";
const TestPage = () => {
  return (
    <>
      <button
        onClick={() => {
          toast("This is a pop-up message!");
        }}
      ></button>
    </>
  );
};

export default TestPage;
