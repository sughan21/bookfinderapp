import React, { useState } from "react";
import "./book.css";
import { FaSearch } from "react-icons/fa";
import CardPage from "../cardpage/card";
import axios from "axios";

import BgLogo from "../../../public/image/bg3.png";
import BgImage from "../../../public/image/bgp.png";

const BookFinder = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyBVeHQeoGrqwb1gdQhpvvWlgSE2nrZBJ34"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url(${BgLogo})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="head-row1">
          <h1 className="find">
            {" "}
            "Books are a uniquely
            <br /> portable magic".{" "}
          </h1>
        </div>
        <div className="head-row2">
          <h2 className="find1"> Choose Your Books </h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button className="search-btn">
              <FaSearch />
            </button>
            <div className="reading-books">
              <img src={BgImage} alt="" className="image-box" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">{<CardPage book={bookData} />}</div>
      <div>
        <div className="homepage">{/* <h1>Learning Hub</h1> */}</div>
      </div>
    </>
  );
};

export default BookFinder;
