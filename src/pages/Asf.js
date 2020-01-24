import React from "react";
import getFile from "../components/shared/getFile";
import Markdown from "markdown-to-jsx";
import { Container } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
const asf = process.env.PUBLIC_URL + "/contents/animal-studies-fellowship.md";
export default function Asf() {
  let c = getFile(asf);
  return (
    <Container>
      <Helmet>
        <title>
          Postdoctoral Fellowship in Animal Studies - Will Kymlicka's Website
        </title>
        <meta
          name="description"
          content="The Department of Philosophy at Queen's University invites applications 
          for its annual Postdoctoral Fellowship in Animal Studies program. This is a two-year 
          non-renewable fellowship. The successful applicant will have a demonstrated expertise 
          in animal ethics, law and public policy, show evidence of teaching potential, and be 
          able to participate constructively in departmental and collegial activities."
        />
      </Helmet>
      <Markdown
        options={{
          overrides: {
            a: {
              props: { target: "_blank" }
            }
          }
        }}
      >
        {"" + (c ? c : "")}
      </Markdown>
    </Container>
  );
}
