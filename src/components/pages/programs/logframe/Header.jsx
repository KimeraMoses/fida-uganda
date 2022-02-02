import { Grid, GridItem } from "@chakra-ui/react";

function Header() {
  return (
    <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
      <GridItem border="1px" px="0.5rem" as="div" bgColor="yellow.400">
        ORGANISATION NAME
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" colSpan={4}>
        FIDA - UGANDA
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" rowSpan={2} colSpan={1}>
        Project Progress
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="yellow.400">
        PROJECT NAME
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" colSpan={4}>
        SBVG NORTHERN
      </GridItem>
    </Grid>
  );
}

export default Header;
