//useState() = A react hook that allows creation of a stateful variable and a setter variable to update its 
//            value in the virtual doom;

import React from "react";

//React hook => Special function that allows functional components to use react features without writing 
//            class components

function UseState()
{
    const [text, setText]= React.useState("Hello!! 👋");

    const changeText=()=>{
        setText(text==="Hello!! 👋"? "Sasa 🖐" : "Hello!! 👋")
    }
    return(
        <>
          <button onClick={()=> changeText()}>{text}</button>
        </>
    );

}
export default UseState;