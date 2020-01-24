import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function WKNavbar() {
  return (
    <Navbar collapseOnSelect className="sticky-top" bg="white" expand="lg">
      <Navbar.Brand
        href="/#/"
        className="d-lg-none"
        style={{ textDecoration: "none" }}
      >
        WK
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link eventKey={1} as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/biography">
            Biography
          </Nav.Link>
          <Nav.Link eventKey={3} target="_blank" href={process.env.PUBLIC_URL + "/contents/docs/CV-web.pdf"}>
            CV
          </Nav.Link>
          <Nav.Link eventKey={4} as={Link} to="/publications">
            Publications
          </Nav.Link>
          <Nav.Link eventKey={5} as={Link} to="/affiliations">
            Affiliations
          </Nav.Link>
          <Nav.Link eventKey={6} as={Link} to="/newsletter">
            Newsletter
          </Nav.Link>
          <Nav.Link eventKey={7} href="https://www.queensu.ca/mcp">MCP Index</Nav.Link>
          <Nav.Link eventKey={8} as={Link} to="/animal-studies-fellowship">
            Animal Studies Fellowship
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
