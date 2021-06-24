import styled from "styled-components";

const Product = styled.div`
  display: flex;
  width: 800px;

  margin-top: 30px;
  border-bottom: 1px solid #555;
  padding-bottom: 30px;
  div:first-child {
    display: flex;
    margin-right: 50px;
    div p {
      margin-left: 20px;
      font-size: 18px;
    }
  }
  img {
    width: 130px;
  }
`;

export default Product;
