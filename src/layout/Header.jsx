import MainNav from "./MainNav";

function Header({isLoggedIn, setIsLoggedIn}) {
    return (
      <>
        <MainNav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </>
    );
  }

  export default Header;