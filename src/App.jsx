import Albums from "./Components/Albums"
import Header from "./Components/Header"
import SideBar from "./Components/sideBar"

function App() {
  return(
    <div className=" font-roboto bg-bgBlack text-topText flex">
   <div>
   <SideBar />
   </div>
   <div className="pl-6">
    <Header />
    <Albums />
   </div>
    </div>
  )
}

export default App
