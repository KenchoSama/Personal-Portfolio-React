import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>90%</div>
        <span  style={{color: darkMode?'white':''}}> react </span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>95%</div>
        <span  style={{color: darkMode?'white':''}}> python </span>

      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}> 90%</div>
        <span  style={{color: darkMode?'white':''}}> C++ </span>
     
      </div>
    </div>
  );
};

export default Experience;
