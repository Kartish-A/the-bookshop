import React from "react";

const BooksList = (props) => {
  return (
    <div className="container">
      {props.books.map((book) => {
        return (
          <div key={book.id} className="card">
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              className="card-img-top"
              alt={book.title}
            />
            <div className="card-body">
              <h5 className="card-title">{book.volumeInfo.title}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Author:{book.volumeInfo.authors}
              </li>
              <li className="list-group-item">
                Language: {book.volumeInfo.language}, Published:{" "}
                {book.volumeInfo.publishedDate}
              </li>
              <li className="list-group-item">
                Average rating {book.volumeInfo.averageRating}{" "}
              </li>
            </ul>
            <div className="card-body">
              <a
                href={book.volumeInfo.canonicalVolumeLink}
                target="blank"
                className="btn btn-primary"
              >
                Search inside
              </a>
              <a
                href={book.volumeInfo.previewLink}
                target="blank"
                className="card-link"
              >
                Preview
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BooksList;
