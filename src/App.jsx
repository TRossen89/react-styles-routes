import { useState } from "react";
import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
  Navigate,
  NavLink,
} from "react-router-dom";

import styled from "styled-components";
import About from "./page/About";
import Entities from "./page/Entities";
import Settings from "./page/Settings";
import PageNotFound from "./page/PageNotFound";
import Home from "./page/Home";
import AppLayout from "./layout/AppLayout";
import Login from "./page/Login";
import { BASE_URL_DEV, BASE_URL_PROD } from "./utils/globalVariables";


function Posts() {
  return (
    <>
      <h1>Posts</h1>
      <Outlet />
    </>
  );
}

function Post() {
  let params = useParams();
  return <h1> Post: {params.postId} </h1>;
}

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({"email": "", "name":"", "roles": ["user"]});



  return (
    <BrowserRouter>

      <Routes>
        <Route element={<AppLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />}>

          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/entities" element={<Entities isLoggedIn={isLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />

          <Route path="posts" element={<Posts />}>
            <Route index element={<h1>New Posts</h1>} />
            <Route path=":postId" element={<Post />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
