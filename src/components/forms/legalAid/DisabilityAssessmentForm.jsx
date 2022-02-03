import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { disabilityAssessmentOptions } from "./options";
import Radio from "../../common/Radio";
import { editCase } from "../../../store/reducers/cases";

function DisabilityAssessmentForm({ setCurrentForm }) {
  const dispatch = useDispatch();
  const { case: activeCase, currentId } = useSelector((state) => state.cases);
  const [sight, setSight] = useState(activeCase?.sight || "");
  const [hearing, setHearingDisability] = useState(activeCase?.hearing || "");
  const [movement, setMovement] = useState(activeCase?.movement || "");
  const [remembering, setRemembering] = useState(activeCase?.remembering || "");
  const [dressing, setDressing] = useState(activeCase?.dressing || "");
  const [speech, setSpeech] = useState(activeCase?.speech || "");
  const [isDisabled, setIsDisabled] = useState(activeCase?.isDisabled || "");

  const genericOptions = disabilityAssessmentOptions["generic"];
  const isDisabledOptions = disabilityAssessmentOptions["isDisabled"];

  useEffect(() => {
    const values = [sight, hearing, movement, remembering, dressing, speech];

    for (let value in values) {
      if (value.length > 0 && value !== "noDifficulty") {
        setIsDisabled("yes");
      }
    }
    if (
      sight === "noDifficulty" &&
      hearing === "noDifficulty" &&
      movement === "noDifficulty" &&
      remembering === "noDifficulty" &&
      dressing === "noDifficulty" &&
      speech === "noDifficulty"
    ) {
      setIsDisabled("no");
    }
  }, [sight, hearing, movement, remembering, dressing, speech]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let id;
    if (activeCase) {
      id = activeCase.complaint;
    } else {
      id = currentId;
    }
    dispatch(
      editCase(id, {
        sight,
        hearing,
        movement,
        remembering,
        dressing,
        speech,
        isDisabled,
      })
    );
    setCurrentForm(3);
  };

  return (
    <Box p="3rem" as="form" onSubmit={handleSubmit}>
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
            let id;
            if (activeCase) {
              id = activeCase.complaint;
            } else {
              id = currentId;
            }
            dispatch(
              editCase(id, {
                sight,
                hearing,
                movement,
                remembering,
                dressing,
                speech,
                isDisabled,
              })
            );
            setCurrentForm(1);
          }}
        >
          Save and Back
        </Button>
        <Button type="submit" rightIcon={<MdArrowForward />}>
          Save and Continue
        </Button>
      </Flex>
    </Box>
  );
}

export default DisabilityAssessmentForm;
