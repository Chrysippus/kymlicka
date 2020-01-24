import React from "react";
import { Container } from "react-bootstrap";
import PdfComponent from "./PdfComponent";
import { Helmet } from "react-helmet-async";

export default function Cv() {
  return (
    <Container className="w-100 text-center">
      <Helmet>
        <title>CV - Will Kymlicka's Website</title>
        <meta
          name="description"
          content="Will Kymlicka's Curriculum Vitae in PDF and browsable format."
        />
      </Helmet>
      <PdfComponent
        src={`${process.env.PUBLIC_URL}/contents/docs/CV-web.pdf`}
      />
    </Container>
  );
}
