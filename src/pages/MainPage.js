import React from "react";

import CategoryBar from "../components/CategoryBar";
import BookCard from "../components/BookCard";
import BookCardContainer from "../components/BookCardContainer";

const MainPage = () => {
  return (
    <div>
      <CategoryBar />
      <BookCardContainer>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </BookCardContainer>
    </div>
  );
};

export default MainPage;
