import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Heading, Textarea } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import { editCase } from "../../../store/reducers/cases";
import QASelectInput from "./QASelectInput";

function StatusForm({ setCurrentForm }) {
  const { case: activeCase, currentId } = useSelector((state) => state.cases);

  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    status: activeCase?.status || "",
    referCase: activeCase?.referCase || "",
    reasonForReferral: activeCase?.reasonForReferral || "",
  });

  const { status, referCase, reasonForReferral } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    let id;
    if (activeCase) {
      id = activeCase.complaint;
    } else {
      id = currentId;
    }
    dispatch(editCase(id, values));
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <QASelectInput
        title={
          <Heading fontSize="xl" mt="2rem" mb="0.5rem">
            11. Status
          </Heading>
        }
        handleChange={handleChange}
        value={status}
        name="status"
      />
      <QASelectInput
        title={
          <Heading fontSize="xl" mt="2rem" mb="0.5rem">
            12. Refer Case
          </Heading>
        }
        handleChange={handleChange}
        value={referCase}
        name="referCase"
      />
      <Heading fontSize="xl" mt="2rem" mb="0.5rem">
        13. Reason for referral.
      </Heading>
      <Textarea
        placeholder="Type here"
        m="3 0 0 0"
        value={reasonForReferral}
        onChange={handleChange}
        name="reasonForReferral"
      />
      <Flex alignItems="center" justifyContent="space-between">
        <Button
          leftIcon={<MdArrowBack />}
          onClick={(e) => {
            let id;
            if (activeCase) {
              id = activeCase.complaint;
            } else {
              id = currentId;
            }
            dispatch(editCase(id, values));
            setCurrentForm(4);
          }}
        >
          Save and Back
        </Button>

        <Button type="submit">Save and Exit</Button>
      </Flex>
    </Box>
  );
}

export default StatusForm;
