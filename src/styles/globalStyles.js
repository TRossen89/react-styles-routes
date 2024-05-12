import { createGlobalStyle, styled } from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(NavLink)`
    color: #d7d8e0;
    text-decoration: none;

    &.active {
        color: #d7d8e0;
        font-weight: bold;
    }`;

const GlobalStyles = createGlobalStyle`


:root {

    --turqois1: #50828c;
    --turqois2: #50758c;
    --turqois3: #50718c;
    --turqois4: #506d8c;
    --turqois5: #50698c;
    --turqois6: #50658c;
    --turqois7: #50618c;
    --turqois8: #505d8c;
    --turqois9: #50598c;
    --turqois10: #50558c;

    --gray1: #d7d8e0;
    --gray2: #a8a9ad;
    --gray3: #7c7c80; 
    
    }
    

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}


body{
    font-family: 'PT Sans', 'Times New Roman'
}
`;

export default GlobalStyles;
