import { findAllByTitle } from "@testing-library/react";
import React, { useState } from "react";
import BooksList from "./BooksList";
import SearchArea from "./SearchArea";

export const Books = (props) => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [sort, setSort] = useState("");

  const searchBook = async (e) => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;
    const data = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchField}&download=epub&key=${apiKey}`
    )
      .then((res) => {
        if (res.ok) {
          console.log("SUCCESS");
        } else {
          console.log("FAILED");
        }
        return res.json();
      })
      .then((result) => {
        console.log({ result });
        setBooks(result.items);
      })
      .catch((Error) => console.log("ERROR"));

  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  let sortedBooks = [];
  sortedBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate) -
        parseInt(a.volumeInfo.publishedDate)
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate) -
        parseInt(b.volumeInfo.publishedDate)
      );
    }
    return sortedBooks;
  })



  return (
    <div>
      <SearchArea
        handleSearch={handleSearch}
        handleSort={handleSort}
        searchBooks={searchBook}
      />
      <BooksList books={sortedBooks} />
    </div>
  );
};



/* const results = await data.json()
    const infoArray= results.items.map(book => book.volumeInfo)
    const items = infoArray.map(item=> ({title:item.title, authors:item.authors,language:item.language,subtitle:item.subtitle}))
    console.log(items); */
