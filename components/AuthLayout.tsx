import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "../styles/AuthLayout.module.css";
import Logo from "./Logo";

type Props = {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
};
const AuthLayout = ({ title, subTitle, children }: Props) => {
  return (
    <Box className={styles.backgroundImage}>
      <Box className={styles.formBackground}>
        <Box className={styles.formHeaderBackground}>
          <Logo size={70} />
          <Box>
            <Text fontSize="xl" align="center" mb="0.25rem" color="purple.900">
              Welcome to
            </Text>
            <Heading
              size="xl"
              alignSelf="center"
              color="purple.900"
              fontWeight="normal"
            >
              <strong>FIDA</strong> IIMS
            </Heading>
          </Box>
          <Box alignSelf="start">
            <Heading size="lg" alignSelf="start" color="purple.600" mb="0.5rem">
              {title}
            </Heading>
            <Text fontSize="md" alignSelf="start" color="purple.900">
              {subTitle}
            </Text>
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
