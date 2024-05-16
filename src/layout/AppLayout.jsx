import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout({isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser}) {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
        <Outlet />
      </>
    );
  }

  export default AppLayout;