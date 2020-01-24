import React from "react";
import getFile from "../components/shared/getFile";
import Markdown from "markdown-to-jsx";
import { Container, Row } from "react-bootstrap";
import { useParams, useLocation } from "react-router-dom";
import { NavNewsletter } from "../components/navbar/navNewsletter";
import { BreadCrumbs } from "../components/shared/BreadCrumbs";
import { getBCS } from "../components/shared/getBCS";
import { Helmet } from "react-helmet-async";

export default function Tra() {
  const params = useParams();
  const location = useLocation();
  const a =
    process.env.PUBLIC_URL +
    "/contents/newsletter" +
    [
      params.no
        ? "/No.-" + params.no + ".-" + params.month + "-" + params.year
        : null
    ] +
    ".md";
  let c = getFile(params.month && params.year ? a : "/contents/newsletter.md");
  let opts = {
    overrides: {
      // a: {
      //   component: RLink
      // }
    }
  };
  let title = c ? c.match(/$(.*)/)[1] : null;
  let { BCLevel2, BCLevel3, BCLevel4 } = BreadCrumbs(params, location, title);
  const BCS = getBCS(location, BCLevel2, BCLevel3, BCLevel4);
  return (
    <Container>
      <Helmet>
        <title>Newsletter - Will Kymlicka's Website</title>
        <meta
          name="description"
          content="As part of a multi-year project on citizenship, democracy and ethnocultural diversity, from 1995 to 2014, I edited and distributed an electronic newsletter updating recent developments in the field, of which seventy issues were produced. The newsletter contained information about upcoming conferences, recent publications, journals, internet resources, and related research programs, intended for anyone working in the field, whether in academia, public service, or various non-governmental organizations."
        />
      </Helmet>
      <Row
        className="sticky-top bg-white"
        style={{ top: "48px", zIndex: "10" }}
      >
        <div className="mb-0 pb-0">
          <BCS className="mb-0 pb-0" />
        </div>
        <div className="w-100 pt-0 mt-0 mx-auto justify-content-center">
          <NavNewsletter />
        </div>
      </Row>
      <Markdown options={opts}>{"" + (c ? c : "")}</Markdown>
    </Container>
  );
}
