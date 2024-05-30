//Click event -An interaction where if a user clicks a specific element and we respond 
//             by passing a callback function on the onclick() event handler

function ClickMe()

{
    // const [text, setText]= React.useState("Poa!!")

    const word="Poa!!"
    const handleClick=(event:any)=> {
        event.target.textContent="Sawa!!" 
        // setText(text==="Poa!!" ? "Sawa!!": "Poa!!")
    }

    return(
        <>
           <button onClick={(event)=>handleClick(event)}>{word}</button>
        </>
    );

}
export default ClickMe