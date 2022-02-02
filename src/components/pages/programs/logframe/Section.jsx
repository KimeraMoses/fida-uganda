import { Grid, GridItem } from "@chakra-ui/react";

function Section({
  title,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  value7,
  value8,
  value9,
  value10,
  value11,
  value12,
  value13,
}) {
  return (
    <Grid templateColumns="repeat(6, 1fr)" mb={"1rem"}>
      <GridItem colSpan={5}>
        <Grid
          templateRows="repeat(4, 1fr)"
          templateColumns="repeat(8, 1fr)"
          mb={"1rem"}
        >
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
            <GridItem border="1px" px="0.5rem" as="div" bgColor="pink.200">
              {heading6}
            </GridItem>
          ) : (
            <GridItem border="1px" px="0.5rem" as="div"></GridItem>
          )}
          <GridItem border="1px" px="0.5rem" as="div" rowSpan={3}>
            {value1}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div" rowSpan={3}>
            {value2}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            Planned
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value3}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value4}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value5}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value6}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value7}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            Achieved
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div" bgColor="purple.100">
            {value8}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div" bgColor="purple.100">
            {value9}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value10}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div" bgColor="purple.100">
            {value11}
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div" bgColor="purple.100">
            {value12}
          </GridItem>
          <GridItem
            border="1px"
            px="0.5rem"
            as="div"
            colSpan={5}
            textAlign="center"
          >
            Source
          </GridItem>
          <GridItem border="1px" px="0.5rem" as="div">
            {value13}
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem border="1px" px="0.5rem">
        0%
      </GridItem>
    </Grid>
  );
}

export default Section;
