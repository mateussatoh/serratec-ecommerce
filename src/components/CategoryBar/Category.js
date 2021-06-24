import styled from "styled-components";

const Container = styled.p`
  font-size: 16px;
  color: #111;
  padding: 15px 70px;

  border-right: 1px solid #555;

  :last-child {
    border: none;
  }

  :hover {
    cursor: pointer;
  }
`;

export default Container;
