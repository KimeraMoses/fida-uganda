import React from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import classes from "./BreadCrumb.module.css";
import { Heading } from "@chakra-ui/react";

const ReportBreadCrumb = ({
  root,
  rootLink,
  folderName,
  reportName,
  folderLink,
}) => {
  return (
    <div className={classes.breadcrumb_wrapper}>
      <Link to={rootLink}>
        <Heading color="purple.800" fontSize="4xl" mb={5}>
          {root}
        </Heading>
      </Link>
      <RiArrowRightSLine size={40} />
      {folderLink && (
        <>
          <Link to={folderLink}>
            <Heading
              color="purple.800"
              fontSize="4xl"
              mb={5}
              textTransform="capitalize"
            >
              {folderName}
            </Heading>
          </Link>
          <RiArrowRightSLine size={40} />
        </>
      )}
      <Heading
        color="purple.800"
        textTransform="capitalize"
        fontSize="4xl"
        mb={5}
      >
        {folderLink ? reportName : folderName}
      </Heading>
    </div>
  );
};

export default ReportBreadCrumb;
