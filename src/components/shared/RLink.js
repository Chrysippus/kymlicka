import React from "react";
import { Link } from "react-router-dom";
export const RLink = ({ children, ...props }) =>
  props.href.startsWith("http") || props.href.startsWith("www") || props.href.includes("@") ? (
    <a {...props}>{children}</a>
  ) : (
    <Link to={props.href}>{children}</Link>
  );
