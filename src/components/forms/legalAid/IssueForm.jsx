import { useState } from "react";
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
import Radio from "../../common/Radio";
import { issuesOptions } from "./options";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

function IssueForm({ onClose, setCurrentForm }) {
  const { values, handleChange } = useForm({
    details: "",
    duration: "",
    action: "",
  });
  const { details, duration, action } = values;
  const [nature, setNature] = useState("");
  const [wasActionTaken, setWasActionTaken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
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
      <TextInput
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
          />
        </>
      ) : null}
      <Flex alignItems="center" justifyContent="space-between">
        <Button leftIcon={<MdArrowBack />} onClick={(e) => setCurrentForm(2)}>
          Back
        </Button>
        <Button
          rightIcon={<MdArrowForward />}
          onClick={(e) => setCurrentForm(4)}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default IssueForm;