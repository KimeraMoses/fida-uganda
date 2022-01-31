import { Grid, GridItem } from "@chakra-ui/react";

function Section({
  title,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
}) {
  return (
    <Grid templateRows="repeat(4, 1fr)" templateColumns="repeat(8, 1fr)">
      <GridItem border="1px" px="0.5rem" as="div">
        {title}
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="yellow.400">
        {heading1}
      </GridItem>
      <GridItem
        border="1px"
        px="0.5rem"
        as="div"
        bgColor="yellow.400"
      ></GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="green.400">
        {heading2}
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="green.400">
        {heading3}
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="green.400">
        {heading4}
      </GridItem>
      <GridItem border="1px" px="0.5rem" as="div" bgColor="green.400">
        {heading5}
      </GridItem>
      {heading6 ? (
        <GridItem border="1px" px="0.5rem" as="div" bgColor="pink.400">
          {heading6}
        </GridItem>
      ) : (
        <GridItem border="1px" px="0.5rem" as="div"></GridItem>
      )}
    </Grid>
  );
}

export default Section;
