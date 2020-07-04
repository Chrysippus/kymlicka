import React from "react";
import { Container, Alert } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
export default function NotFound() {
  return (
    <Container>
      <Helmet>
        <title>Page Not Found! - Will Kymlicka</title>
      </Helmet>
      <Alert
        variant="danger"
        className="text-center font-weight-bold"
        style={{ fontVariant: "small-caps" }}
      >
        Page not found!
      </Alert>
    </Container>
  );
}
