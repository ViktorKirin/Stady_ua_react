import "./index.css";
import { useState } from "react";


function HeartButton({like,sale}) {
    const [clickedBtn, setclickedBtn] = useState(false);
    return (
        <>
        <button className={`${like} ${clickedBtn ? 'clicked' : ''}`} onClick={() => setclickedBtn(!clickedBtn)}></button>
        </>
    )
}

export default HeartButton;
