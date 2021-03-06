import React, { Component } from "react";
import SelectMenu from "./SelectMenu";
import * as BooksAPI from "./BooksAPI";

class BookItem extends Component {

  handleBookState = (e) => {
    BooksAPI.update(this.props.book, e.target.value).then(() =>
      this.props.onUpdatePage()
    );
  };

  render() {

    return (
      <div>
        <li key={this.props.book.id}>
          <div className="book">
            <div className="book-top">
              {this.props.book.imageLinks !== undefined && (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${
                      this.props.book.imageLinks.thumbnail
                    })`,
                  }}
                />
              )}

              <SelectMenu
                book={this.props.book}
                title={this.props.Title}
                onHandleBookState={this.handleBookState}
              />
            </div>
            <div className="book-title">{this.props.Title}</div>
            <div className="book-authors">{this.props.Author}</div>
          </div>
        </li>
      </div>
    );
  }
}

export default BookItem;
