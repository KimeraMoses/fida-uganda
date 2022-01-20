import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { disabilityAssessmentOptions } from "./options";
import Radio from "../../common/Radio";
import { addDisability } from "../../../store/reducers/cases";

function DisabilityAssessmentForm({ setCurrentForm }) {
  const { disability } = useSelector((state) => state.cases.newCase);
  const dispatch = useDispatch();
  const [sight, setSight] = useState(disability.sight || "");
  const [hearing, setHearingDisability] = useState(disability.hearing || "");
  const [movement, setMovement] = useState(disability.movement || "");
  const [remembering, setRemembering] = useState(disability.remembering || "");
  const [dressing, setDressing] = useState(disability.dressing || "");
  const [speech, setSpeech] = useState(disability.speech || "");
  const [isDisabled, setIsDisabled] = useState(disability.isDisabled || "");

  const genericOptions = disabilityAssessmentOptions["generic"];
  const isDisabledOptions = disabilityAssessmentOptions["isDisabled"];

  return (
    <Box p="3rem">
      <Heading size="lg" mb="2rem">
        Case Registration Form
      </Heading>
      <Heading fontSize="xl" mb="3rem">
        2. Disability Assessment
      </Heading>
      <Text>Do you have difficulty seeing even if wearing glasses?</Text>
      <Radio
        options={genericOptions}
        onChange={setSight}
        value={sight}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>Do you have difficulty hearing, even if using a hearing aid</Text>
      <Radio
        options={genericOptions}
        onChange={setHearingDisability}
        value={hearing}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>Do you have difficulty walking or climbing steps</Text>
      <Radio
        options={genericOptions}
        onChange={setMovement}
        value={movement}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>Do you have difficulty remembering or concentrating?</Text>
      <Radio
        options={genericOptions}
        onChange={setRemembering}
        value={remembering}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>
        Do you have difficulty (with self-care such as) washing all over or
        dressing
      </Text>
      <Radio
        options={genericOptions}
        onChange={setDressing}
        value={dressing}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>
        Using your usual (customary) language, do you have difficulty
        communicating, for example understanding or being understood
      </Text>
      <Radio
        options={genericOptions}
        onChange={setSpeech}
        value={speech}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Text>
        From the disability assessment, is the client a person with a
        disability?
      </Text>
      <Radio
        options={isDisabledOptions}
        onChange={setIsDisabled}
        value={isDisabled}
        direction="row"
        m="0.5rem 0 2rem 0"
      />
      <Flex alignItems="center" justifyContent="space-between">
        <Button
          leftIcon={<MdArrowBack />}
          onClick={(e) => {
            setCurrentForm(1);
            dispatch(
              addDisability({
                sight,
                hearing,
                movement,
                remembering,
                dressing,
                speech,
                isDisabled,
              })
            );
          }}
        >
          Back
        </Button>
        <Button
          rightIcon={<MdArrowForward />}
          onClick={(e) => {
            setCurrentForm(3);
            dispatch(
              addDisability({
                sight,
                hearing,
                movement,
                remembering,
                dressing,
                speech,
                isDisabled,
              })
            );
          }}
        >
          Next
        </Button>
      </Flex>
    </Box>
  );
}

export default DisabilityAssessmentForm;
