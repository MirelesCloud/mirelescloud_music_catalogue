import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    background-color: #f7f7f5
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`

const NavHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    font-size: 1.5rem;
`

const NavLeft = styled.div`
    width: 33.333%;
    text-align: left;
`

const NavCenter = styled.div`
    wdith; 33.333%;
    text-align: center;
`

const NavRight = styled.div`
    width: 33.333%;
    text-align: right;

`

function NavBar() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>MirelesCloud Music App</NavLeft>
        <NavCenter></NavCenter>
        <NavRight></NavRight>
      </NavHeader>
    </Nav>
  )
}

export default NavBar;