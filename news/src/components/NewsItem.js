import React, { Component } from "react";
import PropTypes from "prop-types";

const NewsItem = ({
  Title,
  description,
  imageUrl,
  newsUrl,
  author,
  date,
  source,
}) => {
  let d = new Date(date);
  return (
    <>
      <div className="my-3">
        <div className="card" style={{ width: "18rem;" }}>
          <span
            class="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: 1 }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Title}</h5>
            <p className="card-text">
              {description ? description + "..." : ""}
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
                {`${!author ? "UNknown" : author}\n`}
                dated: {d.toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark bg-body-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
