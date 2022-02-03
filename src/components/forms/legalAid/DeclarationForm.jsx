import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  RadioGroup,
  SimpleGrid,
  Radio as ChakraRadio,
  Textarea,
  Flex,
  Text,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import useForm from "../../../hooks/useForm";
import { declarationOptions } from "./options";
import { editCase } from "../../../store/reducers/cases";

function DeclarationForm({ onClose, setCurrentForm }) {
  const dispatch = useDispatch();
  const { case: activeCase, currentId } = useSelector((state) => state.cases);
  const [about, setAbout] = useState(activeCase?.about || "");
  const [hasAgreed, setHasAgreed] = useState(false);
  const { values, handleChange } = useForm({
    natureOfSupport: activeCase?.natureOfSupport || "",
    comments: activeCase?.comments || "",
  });

  const { natureOfSupport, comments } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    let id;
    if (activeCase) {
      id = activeCase.complaint;
    } else {
      id = currentId;
    }
    values.about = about;
    values.hasAgreed = hasAgreed;
    dispatch(editCase(id, values));
    setCurrentForm(5);
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <Heading fontSize="xl" mb="0">
        7. How did you know about FIDA?
      </Heading>
      <RadioGroup value={about} onChange={setAbout} mt="0.5rem">
        <SimpleGrid columns={2} spacing={4} my="0">
          {declarationOptions["about"].map((option) => (
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
        8. What kind of support do you need? Tell us your expectation.
      </Heading>
      <Textarea
        placeholder="Type here"
        m="3 0 0 0"
        value={natureOfSupport}
        onChange={handleChange}
        name="natureOfSupport"
      />
      <Heading fontSize="xl" mt="2rem" mb="0.5rem">
        9. Comments by the legal officer.
      </Heading>
      <Textarea
        placeholder="Type here"
        name="comments"
        value={comments}
        onChange={handleChange}
      />
      <Heading fontSize="xl" mt="2rem">
        10. Declaration.
      </Heading>
      <Flex alignItems="flex-start" gap="1rem" mb="2rem" mt="0.5rem">
        <Checkbox
          size="lg"
          colorScheme="purple"
          isChecked={hasAgreed}
          onChange={(e) => setHasAgreed(e.target.checked)}
        />
        <Text>
          I have read and discussed the above information with the officer and
          understood the risks and benefits involved, the nature and limits of
          confidentiality, and what is expected of me as a client of the legal
          aid services. I hereby instruct FIDA - Uganda to take over the
          management of my case.
        </Text>
      </Flex>
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
            values.about = about;
            values.hasAgreed = hasAgreed;
            dispatch(editCase(id, values));
            setCurrentForm(3);
          }}
        >
          Save and Back
        </Button>

        <Button
          rightIcon={<MdArrowForward />}
          isDisabled={!hasAgreed}
          type="submit"
        >
          Save and Continue
        </Button>
      </Flex>
    </Box>
  );
}

export default DeclarationForm;
