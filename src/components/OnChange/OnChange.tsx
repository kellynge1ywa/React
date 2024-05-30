//onChange = event handler used primarily with form elements
//           <input>,<Select>, <TexatArea>, <Radio button>
//          They trigger a function every time the value of input changes.
import React,{useState} from "react";

function OnChange()
{
   const [name, setName] = useState("");
   const [value, setValue] = useState(1);
   const [comment, setComment] = useState("");
   const [payment, setPayment] = useState("");
   const [age, setAge] = useState("");

   const handleNameChange=(event:any)=>{
    setName(event.target.value)
   }

   const changeComment=(event:any)=>{
    setComment(event.target.value)
   }

   const handleQuantityChange=(event:any)=>{
    setValue(event.target.value)
   }

   const changePayment=(event:any)=>{
    setPayment(event.target.value)
   }

   const changeAge=(event:any)=>{
    setAge(event.target.value)
   }

    return (
        <div>
            <div>
            <input  value={name} onChange={(event)=> handleNameChange(event)}/>
            <p>Name:{name}</p>

            </div>
            <div>
                <input type="number" value={value} onChange={(event)=> handleQuantityChange(event)}/>
                <p>Value: {value}</p>
            </div>
            <div>
                <textarea value={comment} onChange={(event)=> changeComment(event)} placeholder="Comment..."></textarea>
                <p>Comment: {comment}</p>
            </div>
            <div>
                <select value={payment} onChange={(event)=> changePayment(event)} >
                    <option>Select payment method</option>
                    <option value="Visa">Visa</option>
                    <option value="Mpesa">Mpesa</option>
                    <option value="Airtel Money">Airtel Money</option>
                </select>
                <p>Payment method: {payment}</p>
            </div>
            <div>
                <label>
                <input type="radio"  value="18 - 25"
                checked={age === "18 - 25"}
                onChange={(event)=>changeAge(event)}/>
                18 - 25

                </label> <br/>
                <label>
                <input type="radio"  value="25 - 35"
                checked={age === "25 - 35"}
                onChange={(event)=>changeAge(event)}/>
                25 - 35

                </label>
                <p>Age: {age}</p>
            </div>
        </div>
    );

}
export default OnChange;