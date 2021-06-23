import styled from "styled-components";

const Navbar = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1100px;
  list-style: none;
  border-bottom: solid 1px #555;

  li:first-child img {
    width: 65px;
  }
  li:last-child img {
    width: 35px;
  }

  li div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100px;
    height: 50px;
    border-radius: 6px;

    font-size: 18px;
    border: 1px solid #ddd;

    transition: ease-in-out 300ms;

    :hover {
      background-color: #ddd;
    }
  }

  li div a {
    color: #222;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export default Navbar;
