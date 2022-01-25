import { BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";

function BreadCrumpLink({ label }) {
  return (
    <BreadcrumbItem>
      <BreadcrumbLink
        href="#"
        fontSize="5xl"
        fontWeight="bold"
        color="purple.700"
      >
        {label}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
}

export default BreadCrumpLink;
