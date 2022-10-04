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
        <Heading color="purple.800" fontSize="md" mb={5}>
          {root}
        </Heading>
      </Link>
      <RiArrowRightSLine size={20} />
      {folderLink && (
        <>
          <Link to={folderLink}>
            <Heading
              color="purple.800"
              fontSize="md"
              mb={5}
              textTransform="capitalize"
              noOfLines={2}
            >
              {folderName}
            </Heading>
          </Link>
          <RiArrowRightSLine size={20} />
        </>
      )}
      <Heading
        color="purple.800"
        textTransform="capitalize"
        fontSize="md"
        mb={5}
        noOfLines={2}
      >
        {folderLink ? reportName : folderName}
      </Heading>
    </div>
  );
};

export default ReportBreadCrumb;
