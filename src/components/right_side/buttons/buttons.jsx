import React from "react";
import "./index.css";

function Button({className, children,type}) {
    if ({type}) {
        return (
            <div className="buttonConteiner">
                 <button className={className}>{children}</button>
            </div>
        )
    } else {
        return (
            <div className="buttonConteiner">
                 <button className={className} >{children}</button>
            </div>
        ) 
    }

} 
export default Button;
