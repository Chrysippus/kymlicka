import React from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export function getBCS(location, BCLevel2, BCLevel3, BCLevel4) {
  return () =>
    location.pathname.split("/").length > 2 ? (
      <Breadcrumb bsPrefix="breadcrumb mb-0 pb-0 bg-transparent">
        <LinkContainer to="/">
          <BreadcrumbItem>Home</BreadcrumbItem>
        </LinkContainer>
        <BCLevel2 />
        <BCLevel3 />
        <BCLevel4 />
      </Breadcrumb>
    ) : null;
}
