import React from "react";
import { Container } from "react-bootstrap";
const date = new Date();
export const Foot = () => (
  <footer id="page-bottom" className="px-4">
    <Container fluid className="mx-auto">
      <p className="text-center">
        <a
          className="text-white mx-1 d-inline-block"
          href="http://queensu.academia.edu/WillKymlicka/"
        >
          <i className="ai ai-academia-square ai-5x"></i>
          <span className="sr-only">(Academia.edu)</span>
        </a>
        <a
          className="text-white mx-1 d-inline-block"
          href="http://scholar.google.ca/citations?hl=en&amp;user=AoKsdeAAAAAJ"
        >
          <i className="ai ai-google-scholar-square ai-5x"></i>
          <span className="sr-only">(Google Scholar)</span>
        </a>
      </p>
      <p className="text-center" style={{ fontSize: "1.2em" }}>
        Department of Philosophy | Watson Hall Office #313
        <br />
        Queen's University | Kingston, Ontario, Canada, K7L 3N6
        <br />
      </p>
      <p className="text-center">
        {"Content © "}
        <a
          style={{ color: "#fff", textDecoration: "underline" }}
          href="mailto:kymlicka@queensu.ca"
        >
          Will Kymlicka
        </a>
        {", " + date.getFullYear() + " | Design © "}
        <a
          style={{ color: "#fff", textDecoration: "underline" }}
          href="https://www.torindoppelt.com"
        >
          Torin Doppelt
        </a>
        {", " + date.getFullYear()}
        <br />
        {"Last modified: " + document.lastModified}
      </p>
    </Container>
  </footer>
);
