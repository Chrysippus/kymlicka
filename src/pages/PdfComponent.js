import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import pdfjs from "pdfjs-dist";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import {
  Container,
  Pagination,
  InputGroup,
  FormControl,
  Form,
  Button
} from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { Row } from "react-bootstrap";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
const PdfComponent = ({ src }) => {
  const params = useParams();
  let p = parseInt(params.id);
  const history = useHistory();
  const [allpages, setAllpages] = useState();
  const [pg, setPg] = useState(parseInt(p) || 1);
  const canvasRef = useRef(null);
  const [state, setState] = useState({ value: parseInt(p) });
  function handleChange(e) {
    setState({ value: e.target.value });
    e.preventDefault();
  }

  function handleSubmit(e) {
    setState({ value: parseInt(e.target.value) });
    setPg(parseInt(state.value));
    history.push("/cv/" + parseInt(state.value));
    e.preventDefault();
  }

  useEffect(() => {
    const fetchPdf = async () => {
      const loadingTask = pdfjs.getDocument(src);
      const pdf = await loadingTask.promise;
      const firstPageNumber =
        p > pdf.numPages || p < 1 || !Number.isInteger(p)
          ? (window.location.href = "/cv/" + 1)
          : p;
      const page = await pdf.getPage(firstPageNumber || 1);

      setAllpages(pdf.numPages);
      const scale = 4;
      const viewport = page.getViewport({ scale: scale });

      // Prepare canvas using PDF page dimensions
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      // Render PDF page into canvas context
      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      const renderTask = page.render(renderContext);
      await renderTask.promise;
    };

    fetchPdf();
  }, [p, pg, src]);

  return (
    <>
      <Container className="text-center w-100 justify-content-center">
        <Row
          className="justify-content-center sticky-top bg-white pt-2 pb-0"
          style={{ top: 48, zIndex:10 }}
        >
          <Pagination className="p-0 m-0" style={{ whiteSpace: "nowrap", overflow: "none" }}>
            <Pagination.First
              title="First"
              disabled={pg === 1 ? "disabled" : null}
              onClick={e =>
                pg !== 1 ? (window.location.href = "/cv/" + 1) : null
              }
            />
            <Pagination.Prev
              title="Previous"
              disabled={pg <= 1 ? "disabled" : null}
              onClick={e =>
                pg > 1 ? (window.location.href = "/cv/" + (pg - 1)) : null
              }
            />
            {pg > 3 ? (
              <Pagination.Ellipsis className="d-none d-md-block" disabled />
            ) : null}
            {pg > 2 ? (
              <Pagination.Item
                className="d-none d-sm-block"
                onClick={e => (window.location.href = "/cv/" + (pg - 2))}
              >
                {pg - 2}
              </Pagination.Item>
            ) : null}
            {pg > 1 ? (
              <Pagination.Item
                className="d-none d-sm-block"
                onClick={e => (window.location.href = "/cv/" + (pg - 1))}
              >
                {pg - 1}
              </Pagination.Item>
            ) : null}
            <Pagination.Item active>{pg}</Pagination.Item>
            {pg < allpages - 1 ? (
              <Pagination.Item
                className="d-none d-sm-block"
                onClick={e => (window.location.href = "/cv/" + (pg + 1))}
              >
                {pg + 1}
              </Pagination.Item>
            ) : null}
            {pg < allpages - 2 ? (
              <Pagination.Item
                className="d-none d-sm-block"
                onClick={e => (window.location.href = "/cv/" + (pg + 2))}
              >
                {pg + 2}
              </Pagination.Item>
            ) : null}
            {pg < allpages - 3 ? (
              <Pagination.Ellipsis className="d-none d-md-block" disabled />
            ) : null}
            <Pagination.Next
              title="Next"
              disabled={pg > allpages - 1 ? "disabled" : null}
              onClick={e => (window.location.href = "/cv/" + (pg + 1))}
            />
            <Pagination.Last
              title="Last"
              disabled={pg === allpages ? "disabled" : null}
              onClick={e =>
                pg !== allpages
                  ? (window.location.href = "/cv/" + allpages)
                  : null
              }
            />
            <Form className="page-item" onSubmit={handleSubmit}>
              <InputGroup className="d-inline">
                <FormControl
                  className="pr-0 rounded-0 d-inline border-right-0"
                  value={state.value || ""}
                  onChange={handleChange}
                  aria-label="Go to page:"
                  style={{ maxWidth: "50px", borderColor: "#dee2e6" }}
                  onInput={
                    state.value.length > 2
                      ? setState({ value: parseInt(state.value.slice(0, 2)) })
                      : null
                  }
                  required
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="   "
                  pattern="\d+"
                  min={1}
                  max={allpages}
                  type="number"
                  title="Go to page"
                />
                <Button
                  title="Go to page"
                  className="d-inline rounded-0 border-right-0 border-left-0 pl-1 pr-2"
                  variant="white"
                  style={{ verticalAlign: "top", border: "1px solid #dee2e6" }}
                  type="submit"
                >
                  Go
                </Button>
              </InputGroup>
            </Form>
            <Pagination.Item
              as="a"
              title="View / Download PDF"
              href={`${process.env.PUBLIC_URL}/contents/docs/cv-web.pdf`}
            >
              ⤓
            </Pagination.Item>
          </Pagination>
        </Row>

        <canvas
          id="cv"
          ref={canvasRef}
          width="100%"
          className="mx-auto w-100"
          // width={window.innerWidth}
          // height={window.innerHeight}
        />
      </Container>
    </>
  );
};

PdfComponent.propTypes = {
  src: PropTypes.string,
  allpages: PropTypes.string
};

PdfComponent.defaultProps = {
  src: `${process.env.PUBLIC_URL}/contents/docs/cv-web.pdf`,
  allPages: PdfComponent.allPages
};

export default PdfComponent;
