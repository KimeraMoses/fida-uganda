import { Button } from "@chakra-ui/react";

type Props = {
  label: string;
  isLoading?: boolean;
  width?: string;
};

function SubmitButton({ isLoading, label, width = "100%" }: Props) {
  return (
    <Button
      isLoading={isLoading}
      type="submit"
      borderRadius="full"
      bgGradient="linear(to-r, purple.400, purple.700)"
      _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
      size="lg"
      w={width}
      color="white"
    >
      {label}
    </Button>
  );
}

export default SubmitButton;
