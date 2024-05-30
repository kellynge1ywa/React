import React, {useState} from "react";

function ColourPicker()
{
    const [color, setColor]= useState("#000000");
    const pickColor=(event:any)=>{
        setColor(event.target.value);
    }

    return (
        <div>
            <div style={{backgroundColor:color,padding:3}}>
                <span>Color: {color}</span>
            </div>
            <div>
                <label>
                <input type="color" value={color} onChange={(event)=>pickColor(event)} />

                </label>
            </div>
        </div>
    );


}
export default ColourPicker;