import React, { useState } from "react";
import ModalPage from "../modalpage/modal";

const CardPage = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item, index) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        thumbnail = !thumbnail
          ? "https://pics.craiyon.com/2023-07-04/7ef326780d064781a329cc1f7dd9a2b3.webp"
          : thumbnail;
        return (
          <div>
            <div
              className="card"
              key={index}
              onClick={() => {
                setShow(true);
                setItem(item);
              }}
            >
              <div>
                <img src={thumbnail} alt="img_not_found" />
              </div>
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title} </h3>
                <p className="amount">
                  {}
                  {item.saleInfo.listPrice === undefined
                    ? "Not for sales"
                    : "\u20B9 " + item.saleInfo.listPrice.amount}
                </p>
              </div>
            </div>
            <div>
              <ModalPage show={show} item={bookItem} setShow={setShow} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardPage;
