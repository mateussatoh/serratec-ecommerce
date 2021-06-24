import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding-left: 25px;
  padding-top: 25px;
  height: 450px;
  margin: 5px 0;
  border-radius: 10px;
  a,
  a:visited {
    text-decoration: none;
    color: #000;
  }

  &:hover {
    background-color: #ddd;
  }
`;

export default Container;
