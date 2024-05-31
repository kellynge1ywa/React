import Auth from "./components/Auth/Auth"
import CardList from "./components/CardList/CardList"
import ClickMe from "./components/ClickEvents/Click"
import ColourPicker from "./components/ColorPicker/ColourPicker"

import Header from "./components/Header/header"
// import OnChange from "./components/OnChange/OnChange"
import UpdateArrayOfObjects from "./components/Updater/UpdateArrayOfObjects"
import UpdateArrays from "./components/Updater/UpdateArrays"
import UpdateObject from "./components/Updater/UpdateObject"

// import UseState from "./components/UseState/UseState"


interface Props{}


function App() {


  return (
    < >
     <Header/>
      <CardList/>
      <Auth userName="Kelly" isLoggedIn={false}/>
      {/* <Auth userName="Ngeiywa" isLoggedIn={true}/> */}
      <Auth  isLoggedIn={true}/>
      

      <ClickMe />
      {/* <UseState />
      <OnChange /> */}
      <ColourPicker/>
      <UpdateObject/>
      <UpdateArrays/>
      <UpdateArrayOfObjects/>
     

   
        
    </>
  )
}

export default App
