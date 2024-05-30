import { useState } from "react";

function UpdateObject()
{
    const [fruit,setFruit]= useState({name:"",price:0,quantity:0});
    const addFruit=()=>{

    }
    const handleNameChange=(event:any)=>{
        setFruit(f=> ({...f,name: event.target.value}))
    }
    const handlePriceChange=(event:any)=>{
        setFruit(f=> ({...f, price: event.target.value}))
    }

    const handleQuantityChange=(event:any)=>{
        setFruit(f=>({...f,quantity:event.target.value}))
    }
    return (
        <div>
            <span> Fruit: {fruit.name}, Price:{fruit.price},Quantity: {fruit.quantity}</span>
            <div>
                <input type="text" value={fruit.name} placeholder="Enter fruit" onChange={handleNameChange} /> <br />
                <input type="number" value={fruit.price} onChange={handlePriceChange} /> <br />
                <input type="number" value={fruit.quantity} onChange={handleQuantityChange} /> <br />
            </div>

        </div>
    );

}
 export default UpdateObject;