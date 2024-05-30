import { useState } from "react";
import styles from './Updater.module.css'

function UpdateArrays()
{
    const [cars,setCars]=useState([""]);

    const addCar=()=>{
        const newCar=(document.getElementById("carInput") as HTMLInputElement).value;
        (document.getElementById("carInput") as HTMLInputElement).value="";
        setCars(c=> [...c,newCar])
    }

    const removeCar=(index:number)=>{
        setCars( cars.filter((_,i)=> i !== index));
    }
    return (
        <div className={styles.CarList}>
            <h2>Cars</h2>
            <ul> {cars.map((car,index)=> 
             <li key={index} onClick={()=>removeCar(index)}>{car}</li>
            )}</ul>

            <div>
                <input type="text"  id="carInput" placeholder="Enter car.." />
                <button onClick={addCar}>Add</button>
            </div>
        </div>
    );
}
export default UpdateArrays;