import Albums from "./Components/Albums"
import Header from "./Components/Header"
import Player from "./Components/Player"
import SideBar from "./Components/SideBar"

function App() {
  return(
    <div className=" font-roboto bg-bgBlack text-topText flex">
   <div>
   <SideBar />
   </div>
   <div className="pl-6">
    <Header />
    <Albums />
    <Player />
   </div>
    </div>
  )
}

export default App
