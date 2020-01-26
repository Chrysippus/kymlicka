import React from "react";
import { BreadcrumbItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export function BreadCrumbs(params, location, title) {
  let locPath = location.pathname.replace("\\", "/");
  let Level = locPath.split("/").length;
  let BCLevel4 = props =>
    locPath ? (
      Level === 4 || Level === 5 ? (
        <>
          {title ? (
            <BreadcrumbItem
              active
              style={{
                maxWidth: "25vw",
                display: "inline-block",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                OTextOverflow: "ellipsis",
                verticalAlign: "bottom",
                MSTextOverflow: "ellipsis"
              }}
            >
              {title}
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem active>{params.year}</BreadcrumbItem>
          )}
          {params.no ? (
            <BreadcrumbItem active>{params.month}</BreadcrumbItem>
          ) : null}
        </>
      ) : null
    ) : null;
  // console.log(locPath)
  let BCLevel3 = () =>
    locPath ? (
      Level !== 3 && title ? (
        <LinkContainer
          to={"/" + locPath.split("/")[1] + "/" + locPath.split("/")[2]}
        >
          <BreadcrumbItem>
            {locPath.includes("edited-volumes")
              ? locPath
                  .split("/")[2]
                  .split("-")[0][0]
                  .toUpperCase() +
                locPath
                  .split("/")[2]
                  .split("-")[0]
                  .slice(1) +
                " " +
                locPath
                  .split("/")[2]
                  .split("-")[1][0]
                  .toUpperCase() +
                locPath
                  .split("/")[2]
                  .split("-")[1]
                  .slice(1)
              : locPath.split("/")[2][0].toUpperCase() +
                locPath.split("/")[2].slice(1)}
          </BreadcrumbItem>
        </LinkContainer>
      ) : (
        <BreadcrumbItem active>
          {title
            ? title
            : locPath.split("/")[2] !== undefined
            ? locPath.split("/")[2].replace(/-/g, " ")
            : null}
        </BreadcrumbItem>
      )
    ) : null;
  let BCLevel2 = () =>
    locPath ? (
      Level !== 2 ? (
        <LinkContainer to={"/" + locPath.split("/")[1]}>
          <BreadcrumbItem>
            {locPath.split("/")[1][0].toUpperCase() +
              locPath.split("/")[1].slice(1)}
          </BreadcrumbItem>
        </LinkContainer>
      ) : (
        <BreadcrumbItem active>
          {locPath.split("/")[1][0].toUpperCase() +
            locPath.split("/")[1].slice(1)}
        </BreadcrumbItem>
      )
    ) : null;
  return { BCLevel2, BCLevel3, BCLevel4 };
}
