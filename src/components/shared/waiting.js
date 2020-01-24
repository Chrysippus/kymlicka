import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
export function Waiting(Path) {
  return props => (
    <Suspense
      fallback={
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "80vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      }
    >
      <Path />
    </Suspense>
  );
}
