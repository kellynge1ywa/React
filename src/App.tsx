import Auth from "./components/Auth/Auth"
import CardList from "./components/CardList/CardList"
import ClickMe from "./components/ClickEvents/Click"

import Header from "./components/Header/header"
import OnChange from "./components/OnChange/OnChange"
import UseState from "./components/UseState/UseState"


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
      <UseState />
      <OnChange />
     

   
        
    </>
  )
}

export default App
