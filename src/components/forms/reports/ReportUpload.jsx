import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Center, Image } from "@chakra-ui/react";
import { createReport } from "../../../store/reducers/reports";

function ReportUpload({ onClose, file, doc }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.reports);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("report", doc);
    dispatch(createReport(formData));
  };

  return (
    <Box as="form" onSubmit={handleSubmit} borderRadius="3xl">
      <Box
        h="20rem"
        bgColor="purple.100"
        mt="1rem"
        p="2rem"
        borderBottomRadius="3xl"
        boxSize="sm"
      >
        <Image src={file} />
      </Box>

      <Center p="1rem">
        <Button
          type="submit"
          borderRadius="full"
          bgColor="purple.500"
          color="white"
          px="2.5rem"
          _hover={{ bgColor: "purple.700" }}
          isLoading={loading}
        >
          Submit
        </Button>
      </Center>
    </Box>
  );
}

export default ReportUpload;
