import React from "react";

const index = () => {
  return (
    <Container>
      <Image>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/51DV4ZW6l8L._SX335_BO1,204,203,200_.jpg"
          alt=""
        />
      </Image>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
        commodi ut ipsum vitae maxime explicabo, reprehenderit accusamus minima
        dolore iste, recusandae eligendi unde tempore repudiandae!
      </Description>
      <BuyModal>
        <h2>Título do livro</h2>
        <p>Quantidade estoque</p>
        <div>
          <p>5</p>
          <button>+</button>
          <button>-</button>
        </div>
        <p>Calcular frete</p>
        <input type="text" />
      </BuyModal>
    </Container>
  );
};

export default index;
