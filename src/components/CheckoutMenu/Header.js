import styled from "styled-components";

const Header = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 40px 0;
  }
  div {
    display: flex;
    p {
      margin-right: 100px;
      font-size: 18px;
    }
    p:first-child {
      margin-right: 300px;
    }
  }
`;

export default Header;
