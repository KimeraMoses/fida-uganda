import { ChevronRightIcon } from "@chakra-ui/icons";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function BreadCrump({ projectName = "Project" }) {
  const location = useLocation();
  const { pathname } = location;
  const showMiddle = pathname.includes("/fida-projects/details");
  const showLast =
    pathname.includes("/documents") ||
    pathname.includes("/progress") ||
    pathname.includes("/logframe");
  const pathnameList = pathname.split("/");

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      <BreadcrumbItem isCurrentPage={location.pathname === "/fida-projects"}>
        <Link to="/fida-projects">
          <BreadcrumbLink
            as="span"
            fontSize="3xl"
            fontWeight="bold"
            color="purple.700"
          >
            FIDA Projects
          </BreadcrumbLink>
        </Link>
      </BreadcrumbItem>
      {showMiddle && (
        <BreadcrumbItem>
          <Link to="/fida-projects/details">
            <BreadcrumbLink
              as="form"
              fontSize="3xl"
              fontWeight="bold"
              color="purple.700"
            >
              {projectName}
            </BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
      )}

      {showLast && (
        <BreadcrumbItem>
          <BreadcrumbLink fontSize="3xl" fontWeight="bold" color="purple.700">
            {capitalizeFirstLetter(
              pathname.split("/")[pathnameList.length - 1]
            )}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
}

export default BreadCrump;
