import Register from "./component/Auth/register";

import SignIn from "./component/Auth/SignIn";
import DiscoveryPage from "./pages/Discovery";
import HomePages from "./pages/Hompages";
// import SignIn from "./component/Auth/SignIn"
import { Route, Routes } from "react-router-dom";
import WatchListPage from "./pages/WatchListPage";
import LastDetails from "./component/Home/Last";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import Profile from "./component/Home/Profile";

function App() {
  return (
    <Routes>
      <Route path="/SignInPage" element={<SignIn />} />
      <Route path="/" element={<HomePages />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/profilepage" element={<Profile />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/Watchlist" element={<WatchListPage />} />
        <Route path="/MovieDetails/:id" element={<LastDetails />} />
        <Route path="/DiscoveryPage" element={<DiscoveryPage />} />
      </Route>
    </Routes>
  );
}

export default App;
