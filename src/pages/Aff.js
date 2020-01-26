import React from "react";
import getFile from "../components/shared/getFile";
import Markdown from "markdown-to-jsx";
import { Container, Nav, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
const aff = process.env.PUBLIC_URL + "/contents/affiliations.md";
export default function Aff() {
  let c = getFile(aff);
  return (
    <Container>
      <Helmet>
        <title>Affiliations - Will Kymlicka</title>
        <meta
          name="description"
          content="Listing of Will Kymlicka's membership in Professional Organizations, 
          Advisory Boards, Editorial Boards, Visting Professional."
        />
      </Helmet>
      <h1 className="text-left">Affiliations</h1>
      <Nav
        className="justify-content-center sticky-top bg-white"
        style={{ top: "45px", zIndex: 10 }}
      >
        <Button variant="white" href="#professional-organizations">
          Professional Organizations
        </Button>
        <Button variant="white" href="#advisory-boards">
          Advisory Boards
        </Button>
        <Button variant="white" href="#editorial-boards">
          Editorial Boards
        </Button>
        <Button variant="white" href="#visiting-professorships">
          Visiting Professorships
        </Button>
      </Nav>
      <Markdown
        options={{
          overrides: {
            h1: {
              props: { className: "d-none" }
            },
            h2: {
              props: {
                className: "text-left",
                style: {
                  marginTop: "-120px",
                  paddingTop: "120px"
                }
              }
            },
            li: {
              props: { className: "text-left" }
            },
            a: {
              props: { target: "_blank", rel:"noopener" }
            }
          }
        }}
      >
        {"" + (c ? c : "")}
      </Markdown>
    </Container>
  );
}
