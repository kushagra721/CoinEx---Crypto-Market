import React from "react";
import "./SelectButton.css"




const SelectButton = ({ children, selected, onClick }) => {
   
  
    
  
    return (
      <span onClick={onClick} className="select" style={{backgroundColor:selected?"gold": "",color: selected ? "black" : "", fontWeight: selected ? 700 : 500}}>
        {children}
      </span>
    );
  };
  
  export default SelectButton;