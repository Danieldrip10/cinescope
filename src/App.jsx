import Register from "./component/Auth/register"

import SignIn from "./component/Auth/SignIn"
import DiscoveryPage from "./pages/Discovery"
import HomePages from "./pages/Hompages"
// import SignIn from "./component/Auth/SignIn"
import { Route, Routes } from "react-router-dom"
import WatchListPage from "./pages/WatchListPage"
import LastDetails from "./component/Home/Last"


function App() {


  return (
    <Routes>
      
      <Route path="/DiscoveryPage" element={ <DiscoveryPage />}  />
     <Route path="/SignInPage" element={ <SignIn />} />
     <Route path="/" element={ <HomePages/>} />
     <Route path="/Register" element={  <Register />} />
     <Route path="/Watchlist" element={<WatchListPage/>}/>
     <Route path="/MovieDetails/:id" element={<LastDetails/>}/>
     
    
     
    </Routes>
  )
}

export default App
