import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  SimpleGrid,
  Radio as ChakraRadio,
  RadioGroup,
  Textarea,
  Flex,
  Button,
} from "@chakra-ui/react";
import { editCase } from "./../../../store/reducers/cases";
import Radio from "../../common/Radio";
import { issuesOptions } from "./options";
import useForm from "../../../hooks/useForm";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import NumberInput from "../../common/NumberInput";

function IssueForm({ setCurrentForm }) {
  const { case: activeCase, currentId } = useSelector((state) => state.cases);
  const dispatch = useDispatch();
  const { values, handleChange } = useForm({
    details: activeCase?.details || "",
    duration: activeCase?.duration || "",
    action: activeCase?.action || "",
  });
  const { details, duration, action } = values;
  const [nature, setNature] = useState(activeCase?.nature || "");
  const [wasActionTaken, setWasActionTaken] = useState(
    activeCase?.wasActionTaken || ""
  );

  return (
    <Box p="3rem">
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <Heading fontSize="xl" mb="0">
        3. Nature of Issue/Matter/Case
      </Heading>
      <RadioGroup value={nature} onChange={setNature} mt="0.5rem">
        <SimpleGrid columns={3} spacing={4} my="0">
          {issuesOptions["nature"].map((option) => (
            <ChakraRadio
              key={option.value}
              value={option.value}
              colorScheme="purple"
            >
              {option.label}
            </ChakraRadio>
          ))}
        </SimpleGrid>
      </RadioGroup>
      <Heading fontSize="xl" mt="2rem" mb="0.5rem">
        4. Kindly provide more details about the matter/case selected above
      </Heading>
      <Textarea
        placeholder="Type here"
        m="3 0 0 0"
        value={details}
        onChange={handleChange}
        name="details"
      />
      <Heading fontSize="xl" mt="2rem" mb="0.5rem">
        5. How long has this been happening?
      </Heading>
      <NumberInput
        placeholder="Type here"
        name="duration"
        value={duration}
        handleChange={handleChange}
      />
      <Heading fontSize="xl" mt="2rem">
        6. Have you talked to anyone before?
      </Heading>
      <Radio
        options={issuesOptions["wasActionTaken"]}
        value={wasActionTaken}
        onChange={setWasActionTaken}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      {wasActionTaken === "yes" ? (
        <>
          <Heading fontSize="xl" mt="2rem" mb="0.5rem">
            Tell us the person or organization and the action that was taken
          </Heading>
          <Textarea
            placeholder="Type here"
            name="action"
            value={action}
            onChange={handleChange}
            mb="2rem"
          />
        </>
      ) : null}
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
            values.nature = nature;
            values.wasActionTaken = wasActionTaken;
            dispatch(editCase(id, values));
            setCurrentForm(2);
          }}
        >
          Save and Back
        </Button>
        <Button
          rightIcon={<MdArrowForward />}
          onClick={(e) => {
            let id;
            if (activeCase) {
              id = activeCase.complaint;
            } else {
              id = currentId;
            }
            values.nature = nature;
            values.wasActionTaken = wasActionTaken;
            dispatch(editCase(id, values));
            setCurrentForm(4);
          }}
        >
          Save and Next
        </Button>
      </Flex>
    </Box>
  );
}

export default IssueForm;
