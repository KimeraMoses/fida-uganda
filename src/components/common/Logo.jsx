import { Image } from "@chakra-ui/react";
import logo from "../../assets/images/FIDA_Logo.png";

function Logo({ size = 100 }) {
  const width = 489;
  const height = 334;
  const defaultRatio = width / height;

  return (
    <Image
      alignSelf="center"
      height={`${size}px`}
      width={`${defaultRatio * size}px`}
      src={logo}
      alt="logo"
    />
  );
}

export default Logo;
