import React from "react";
import getFile from "../components/shared/getFile";
import { RLink } from "../components/shared/RLink";
import Markdown from "markdown-to-jsx";
import { Container, Carousel } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
const home = process.env.PUBLIC_URL + "/contents/home.md";
const filelist =
  process.env.PUBLIC_URL +
  "/contents/images/books/zoopolis-carousel/FileList.txt";
const ImgURL =
  process.env.PUBLIC_URL + "/contents/images/books/zoopolis-carousel/zoopolis-";
export default function Home() {
  let c = getFile(home);
  let FileList = getFile(filelist);
  let CarItems = [];
  for (let i = 1; i <= FileList; i++) {
    CarItems[i] = (
      <Carousel.Item key={i}>
        <picture>
          <source
            srcSet={ImgURL + i + ".webp"}
            loading="lazy"
            width="301"
            type="image/webp"
          />
          <source
            srcSet={ImgURL + i + ".png"}
            loading="lazy"
            width="301"
            type="image/jpeg"
          />
          <img
            loading="lazy"
            src={ImgURL + i + ".png"}
            width="301"
            className="shadow-lg mb-5 bg-white"
            alt="Book Cover"
          />
        </picture>
      </Carousel.Item>
    );
  }
  let opts = {
    overrides: {
      h1: {
        props: { className: "d-none" }
      },
      a: {
        component: RLink,
        props: { target: "_blank", rel: "noopener noreferrer" }
      }
    }
  };
  return (
    <Container>
      <Helmet>
        <title>Home - Will Kymlicka</title>
        <meta
          name="description"
          content="Will Kymlicka is the Canada Research Chair in Political Philosophy in the Philosophy Department at Queen's University in Kingston, Canada, where he has taught since 1998. His research interests focus on issues of democracy and diversity, and in particular on models of citizenship and social justice within multicultural societies. He has published eight books and over 200 articles, which have been translated into 34 languages, and has received several awards, most recently, Honorary Doctorates from the University of Copenhagen in 2013 and KU Leuven in 2014, and the 2019 Gold Medal from the Social Sciences and Humanities Research Council of Canada."
        />
      </Helmet>
      <Carousel
        className="float-sm-left mx-auto mr-sm-4 mb-2"
        style={{ maxWidth: "301px" }}
      >
        {CarItems}
      </Carousel>
      <Markdown options={opts}>{"" + (c ? c : "")}</Markdown>
    </Container>
  );
}
