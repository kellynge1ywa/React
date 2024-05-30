
export interface Country{
    id:number,
    countryName:string,
    capitalCity:string

}

function List(props:{items:Country[]})
{
    
    const countryList=props.items;
    const listItems=countryList.map(item=> <ul><li key={item.id}>{item.countryName} --- {item.capitalCity}</li></ul>)

    // const cars=["Audi","BMW","Merecedes Benz","Porsche Cayenne","Maserati"];
    // const carItems=cars.map(car=> <ul><li>{car}</li></ul>)
    return(
        <>
        <div >
            
            {listItems}

            
        </div>
        {/* <div>
            {carItems}
        </div> */}
        </>
    );
}
export default List;