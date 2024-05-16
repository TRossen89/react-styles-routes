import MainNav from "./MainNav";

function Header({isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser}) {
    return (
      <>
        <MainNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      </>
    );
  }

  export default Header;