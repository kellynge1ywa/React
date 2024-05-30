function Fruits(){
    const fruit1="Orange";
    const fruit2="Pineapple";
    return(
        <div>
            <ul>
                <li>Apple</li>
                <li>{fruit1}</li>
                <li>{fruit2.toUpperCase()}</li>
            </ul>
        </div>
    );

}
export default Fruits;