import styled from "styled-components";

const Search = styled.li`
  display: flex;
  justify-content: space-between;
  width: 450px;
  margin: 8px 0px;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;

  input {
    width: 350px;

    padding: 12px 20px;
    font-size: 16px;
    outline: none;
    border: none;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border: none;
    outline: none;
  }
  img {
    width: 25px;
  }
`;

export default Search;
