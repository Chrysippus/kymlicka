import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export function getBCS(location, BCLevel2, BCLevel3, BCLevel4) {
  return () =>
    location.pathname.split("/").length > 2 ? (
      <Breadcrumb bsPrefix="breadcrumb mb-0 pb-0 bg-transparent">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <BCLevel2 />
        <BCLevel3 />
        <BCLevel4 />
      </Breadcrumb>
    ) : null;
}
