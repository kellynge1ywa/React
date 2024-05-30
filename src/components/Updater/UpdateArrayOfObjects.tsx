import { useState } from "react";
interface Country{
    name:string,
    capital:string,
    population:number
}

function UpdateArrayOfObjects()
{
    const [countries,setCountries]= useState<Country[]>([]);
    const [countryName, setCountryName]=useState("");
    const [capitalCity, setCapitalCity]=useState("");
    const [population,setPopulation]= useState(0);

    const addCountry=()=>{
        const newCountry:Country={name:countryName,capital:capitalCity,population:population}
        setCountries(c=>[...c,newCountry])
    }

    const removeCountry=(index:number)=>{

    }

    const handldChangeCountryName=(event:any)=>{
        setCountryName(event.target.value)
    }

    const handleChangeCapitalCity=(event:any)=>{
        setCapitalCity(event.target.value)
    }

    const handleChangePopulation=(event:any)=>{
        setPopulation(event.target.value)
    }
    return (
        <div>
            <h2>List of countries</h2>
            <ul>
                {countries.map((country:Country,index)=> <li key={index}>Country: {country.name}, Capital City:{country.capital}
                Population:{country.population}
                </li>)}
            </ul>

            <div>
                <input type="text" value={countryName} placeholder="Enter country name.." onChange={handldChangeCountryName}/> <br />
                <input type="text" value={capitalCity}  placeholder="Enter capital city.." onChange={handleChangeCapitalCity} /> <br />
                <input type="number" value={population}  placeholder="Enter population.." onChange={handleChangePopulation} /> <br />
                <button onClick={addCountry}>Add Country</button>

            </div>

        </div>
    );

}
export default UpdateArrayOfObjects;