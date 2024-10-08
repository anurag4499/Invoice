import React from "react";
import logo from "../images/image.png";
import { Link } from "react-router-dom";

const InvoiceHeader = () => {
  return (
    <div className="flex items-start justify-between mb-4">
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 mb-2" />
        </Link>
        <h1 className="text-2xl font-medium">Amigo Softcom</h1>
        <p>India</p>
      </div>
      <div className="flex items-start">
        <div className="ml-auto">
          <p className="font-medium">Invoice No:</p>
         
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
