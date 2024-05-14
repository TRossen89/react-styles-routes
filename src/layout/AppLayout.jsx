import Header from "./Header";
import { Outlet } from "react-router-dom";

function AppLayout({isLoggedIn, setIsLoggedIn}) {
    return (
      <>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Outlet />
      </>
    );
  }

  export default AppLayout;