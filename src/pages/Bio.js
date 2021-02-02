import React from "react";
import getFile from "../components/shared/getFile";
import Markdown from "markdown-to-jsx";
import { Container, Image } from "react-bootstrap";
import { RLink } from "../components/shared/RLink";
import { Helmet } from "react-helmet-async";
const bio = process.env.PUBLIC_URL + "/contents/biography.md";
const PhotoWebP = process.env.PUBLIC_URL + "/contents/images/photos/maRs.webp";
const PhotoJpg = process.env.PUBLIC_URL + "/contents/images/photos/maRs.jpg";
export default function Bio() {
  let c = getFile(bio);
  return (
    <Container>
      <Helmet>
        <title>Biography - Will Kymlicka</title>
        <meta
          name="description"
          content="Will Kymlicka received his B.A. in philosophy and politics from Queen's University in 1984, 
          and his D.Phil. in philosophy from Oxford University in 1987. He is the author of seven books published 
          by Oxford University Press: Liberalism, Community, and Culture (1989), Contemporary Political Philosophy 
          (1990; Second Edition 2002), Multicultural Citizenship (1995), which was awarded the Macpherson Prize by 
          the Canadian Political Science Assocation, and the Bunche Award by the American Political Science Association, 
          Finding Our Way: Rethinking Ethnocultural Relations in Canada (1998), Politics in the Vernacular: Nationalism, 
          Multiculturalism and Citizenship (2001), Multicultural Odysseys: Navigating the New International Politics of 
          Diversity (2007), which was awarded the North American Society for Social Philosophy's 2007 Book Award, and 
          Zoopolis: A Political Theory of Animal Rights (2011), co-authored with Sue Donaldson, which was awarded the 
          2013 Biennial Book Prize from the Canadian Philosophical Association."
        />
      </Helmet>
      <picture>
        <source srcSet={PhotoWebP} type="image/webp" />
        <source srcSet={PhotoJpg} type="image/jpg" />
        <Image
          src={PhotoJpg}
          alt="Will Kymlicka at MaRS"
          className="img-thumbnail p-2 mt-2 float-sm-start me-4 mb-1"
        />
      </picture>
      <Markdown
        options={{
          overrides: {
            h1: {
              props: { className: "text-start" },
            },
            a: {
              component: RLink,
              props: { target: "_blank", rel: "noopener noreferrer" },
            },
          },
        }}
      >
        {"" + (c ? c : "")}
      </Markdown>
    </Container>
  );
}
