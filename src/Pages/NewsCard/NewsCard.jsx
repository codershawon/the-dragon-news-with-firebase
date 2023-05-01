import React from "react";
import { Card } from "react-bootstrap";
import {
  FaShareAlt,
  FaBookmark,
  FaStar,
  FaEye,
  FaRegStar,
} from "react-icons/fa";
// import logo from "../../../src/assets/player-3.png";
import { Link } from "react-router-dom";
import moment from "moment";
import Rating from "react-rating";
const NewsCard = ({ news }) => {
  const { _id, author, image_url, details, title, rating, total_view } = news;
  return (
    <Card className="text-center mt-4">
      <Card.Header
        className="d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "#F3F3F3",
          border: "1px solid #F3F3F3",
          borderRadius: "5px 5px 0px 0px",
        }}
      >
        <div className="d-flex align-items-center gap-3">
          <img style={{ height: "40px", width: "40px", borderRadius:"50%" }} src={author.img} alt="" />
          <div className="mt-3 text-start fs-6">
            <h5>{author.name}</h5>
            <p>{moment(author.published_date).format("YYYY-MM-D")}</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          {" "}
          <FaBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title className="text-start">{title}</Card.Title>
        <img
          style={{ width: "100%", height: "350px", borderRadius: "5px" }}
          src={image_url}
          alt=""
        />
        <Card.Text className="text-start mt-3">
          {details.length < 300 ? (
            <>{details}</>
          ) : (
            <>{details.slice(0, 300)}....</>
          )}
          <br></br>
          <Link
            to={`/news/${_id}`}
            className="text-start"
            style={{ color: "#FF8C47", textDecoration: "none" }}
          >
            Read More
          </Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <Rating
              placeholderRating={rating.number}
              readonly
              emptySymbol={<FaRegStar style={{ color: "#FF8C47" }} />}
              placeholderSymbol={<FaStar style={{ color: "#FF8C47" }} />}
              fullSymbol={<FaStar style={{ color: "#FF8C47" }} />}
            />
            {/* <FaStar style={{ color: "#FF8C47" }} />
            <FaStar style={{ color: "#FF8C47" }} />
            <FaStar style={{ color: "#FF8C47" }} />
            <FaStar style={{ color: "#FF8C47" }} />
            <FaStar style={{ color: "#FF8C47" }} /> */}
            <span>{rating.number}</span>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
