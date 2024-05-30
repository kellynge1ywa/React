import List, { Country } from "../List/List";


function Lists()
{
    const countries:Country[]=[
        {id:1, countryName:"Kenya",capitalCity:"Nairobi"},
        {id:2, countryName:"Uganda",capitalCity:"Kampala"},
        {id:3, countryName:"Tanzania",capitalCity:"Dar Es Saalam"},
        {id:4, countryName:"Rwanda",capitalCity:"Kigali"},
        {id:5, countryName:"Burundi",capitalCity:"Bujumbura"}

    ]
    return(
        <>
            
            {countries.length > 0 ? <List items={countries} /> : []}
        </>
    );

}
export  default Lists;