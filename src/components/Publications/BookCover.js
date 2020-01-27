import React from "react";
import { Image } from "react-bootstrap";
export const BookCover = props => (
  <picture onError={i => (i.target.style.display = "none")}>
    <source srcSet={props.ImgURL + ".webp"} type="image/webp" />
    <source srcSet={props.ImgURL + ".jpg"} type="image/jpeg" />
    <Image
      loading="lazy"
      src={props.ImgURL + ".jpg"}
      className="shadow-lg bg-white float-left mr-4"
      style={{ width: "301px" }}
      width="301"
      alt={props.id + ": cover"}
    />
  </picture>
);
