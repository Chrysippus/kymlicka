import React from "react";
import useAxios from "axios-hooks";
import { Spinner, Alert } from "react-bootstrap";

export default function GetFile(file) {
  const [{ data, loading, error }] = useAxios(
    file ? file : null
  );
  return (
    loading ? <Spinner /> : "",
    error ? <Alert variant="danger">Something went wrong</Alert> : "",
    data ? data : null
  )
}
