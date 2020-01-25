import React from "react";
import getFile from "../components/shared/getFile";
import { RLink } from "../components/shared/RLink";
import Markdown from "markdown-to-jsx";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col
} from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { BookCover } from "../components/Publications/BookCover";
import { BreadCrumbs } from "../components/shared/BreadCrumbs";
import { getBCS } from "../components/shared/getBCS";
import { Helmet } from "react-helmet-async";
export default function Pub() {
  const params = useParams();
  const location = useLocation();
  const a = getFile(
    process.env.PUBLIC_URL +
      "/contents/" +
      [params.id ? "publications/" + params.id : "publications"] +
      [params.sub ? "/" + params.sub : null] +
      ".md"
  );
  const regex = /# (.*)/;
  const title = a ? a.match(regex)[1] : "";
  let ImgURL, opts;
  ImgURL =
    process.env.PUBLIC_URL +
    "/contents/images/books/lg/" +
    [location.pathname.includes("books") ? "books/" : "edited/"] +
    [
      location.pathname.split("\\")[1]
        ? location.pathname.split("\\")[1]
        : location.pathname.split("/")[3]
    ];
  opts = {
    overrides: {
      h2: {
        props: { className: "small" }
      },
      BCS: {
        component: Breadcrumb
      },
      bc: {
        component: BreadcrumbItem
      },
      tr: {
        props: { className: "w-100" }
      },
      a: {
        component: RLink,
        props: { target: "_blank" }
      }
    }
  };
  let Cover;
  ImgURL.includes("broadview-anthology-social")
    ? (Cover = () => (
        <>
          <BookCover id="broadview-anthology-social" ImgURL={ImgURL + "-v1"} />
          <BookCover id="broadview-anthology-social" ImgURL={ImgURL + "-v2"} />
        </>
      ))
    : (Cover = () => <BookCover id={params.id} ImgURL={ImgURL} />);
  if (ImgURL.includes("undefined") || ImgURL.split("/")[6].length < 1) {
    Cover = () => <></>;
  }
  let { BCLevel2, BCLevel3, BCLevel4 } = BreadCrumbs(params, location, title);
  const BCS = getBCS(location, BCLevel2, BCLevel3, BCLevel4);
  let locPath = location.pathname.split(/[/\\-]/);
  locPath =
    locPath.length >= 4
      ? [
          "",
          locPath[1].toUpperCase()[0] + locPath[1].substr(1),
          locPath[2].toUpperCase()[0] +
            locPath[2].substr(1) +
            " " +
            locPath[3].toUpperCase()[0] +
            locPath[3].substr(1)
        ]
      : [
          "",
          locPath[1] ? locPath[1].toUpperCase()[0] + locPath[1].substr(1) : "",
          locPath[2] ? locPath[2].toUpperCase()[0] + locPath[2].substr(1) : "",
          locPath[3] ? locPath[3].toUpperCase()[0] + locPath[3].substr(1) : ""
        ];
  return (
    <Container>
      <Helmet>
        <title>
          {title + " - "}
          {locPath[3] && !title.includes(locPath[3].substr(0, 3)) ? locPath[3] + " - " : ""}
          {locPath[2] && !title.includes(locPath[2].substr(0, 3))
            ? locPath[2] + " - "
            : ""}
          {locPath[1] && !title.includes(locPath[1].substr(0, 3)) ? locPath[1] + " - " : ""}
          Will Kymlicka
        </title>
        <meta
          name="description"
          content="Listings and detailed content of Will Kymlicka's publications. 
          Sections include: Books, Edited Volumes, Articles / Chapters, Interviews, 
          Reviews, Related, Art / Travel, Translated, and Citations"
        />
      </Helmet>
      <Row className="sticky-top bg-white" style={{ top: "45px", zIndex: 10 }}>
        <BCS />
      </Row>
      <Row className="pt-5">
        <Col>
          <Cover />
          <Markdown options={opts}>{"" + (a ? a : "")}</Markdown>
        </Col>
      </Row>
    </Container>
  );
}
