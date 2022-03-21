import { Box } from "@chakra-ui/react";
import image from "../../../assets/images/FIDA_Wave_2.png";

type Props = {
  children?: React.ReactNode;
};

const Main = ({ children }: Props) => {
  return (
    <Box
      p={5}
      width="75%"
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflowY="auto"
    >
      {children}
    </Box>
  );
};

export default Main;
