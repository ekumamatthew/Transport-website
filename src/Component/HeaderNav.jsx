import React, {useState, useEffect} from "react";
import styled from "styled-components";

const HeaderBg = styled.div`
   display: block;
    background: gray;
`;

const Nav = styled.nav`
  font-size: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: right;
  @media(min-width: 500px){
    display: flex;
    flex-direction: row;
  }
`;

const NavItems= styled.div`
 
`;

const Button = styled.button`
@media(min-width: 500px){
  display: none
}
`


export function HeaderNav() {
  const[toggleNav, setTogglenav] = useState(false);
  const[screenWidth, setScreenWidth] = useState(window.innerWidth);
  const toggleItems = function(){
    setTogglenav(!toggleNav)
  }

  useEffect(() => {
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', changeWidth)
  }, []);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    return(
      window.removeEventListener('resize', changeWidth)
    )
  }, []);

  return (
    <HeaderBg>
      {(toggleNav || screenWidth > 500) && (
        <Nav>
          <NavItems>Home</NavItems>
          <NavItems>Services</NavItems>
          <NavItems>Bookings</NavItems>
          <NavItems>Testimonials</NavItems>
          <NavItems>Tracking</NavItems>
          <NavItems>Contact</NavItems>
        </Nav>
      )}
      
      <Button onClick={toggleItems}>
        menu<br></br>
        .....
        </Button>
    </HeaderBg>
  );
}
