import Image from "next/image";

type Props = {
  size?: number;
};

const Logo = ({ size = 50 }: Props) => {
  const height = size;
  const RATIO = 1.464;
  const width = size * RATIO;

  return (
    <Image
      src="/images/FIDA_Logo.png"
      alt="FIDA logo"
      width={width}
      height={height}
    />
  );
};

export default Logo;
