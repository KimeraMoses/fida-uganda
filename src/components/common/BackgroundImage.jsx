import { Box } from "@chakra-ui/react";
import image from "./../../defaultData/images/1.jpeg";

function BackgroundImage({ children }) {
  return (
    <Box
      bgColor="gray.100"
      width="100%"
      minH="200vh"
      height="100%"
      position="relative"
      bgGradient={`linear-gradient(to bottom, rgba(128, 90, 213, 60%), rgba(183, 148, 244, 20%)), url(${image})`}
      backgroundColor="purple.100"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {children}
    </Box>
  );
}

export default BackgroundImage;
