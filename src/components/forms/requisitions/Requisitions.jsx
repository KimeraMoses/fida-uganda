import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import useForm from "../../../hooks/useForm";
import TextInput from "../../common/TextInput";
import SubmitButton from "../SubmitButton";
import NumberInput from "../../common/NumberInput";
import Date from "../../common/Date";
import SelectInput from "../../common/SelectInput";
import { requisitionOptions } from "../../../defaultData/menu/options";

function RequisitionsForm() {
  const { values, handleChange } = useForm({
    projectName: "",
    budgetYear: "",
    type: "",
    unitPrice: 0,
    quantity: 0,
    subject: "",
    location: "",
    date: "",
  });

  const {
    projectName,
    budgetYear,
    type,
    unitPrice,
    quantity,
    subject,
    location,
    date,
  } = values;

  const isDisabled = !(
    projectName &&
    budgetYear &&
    type &&
    unitPrice &&
    quantity &&
    subject &&
    location &&
    date
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity > 0 && unitPrice > 0) {
      alert(JSON.stringify(values, null, 2));
    }
  };

  return (
    <Box as="form" p="3rem" onSubmit={handleSubmit}>
      <Heading size="lg" mb="1rem">
        Requisition Form
      </Heading>
      <SimpleGrid columns={2} gap={4} mb="1rem">
        <TextInput
          placeholder="Project Name"
          name="projectName"
          value={projectName}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Budget Year"
          name="budgetYear"
          value={budgetYear}
          handleChange={handleChange}
        />
        <SelectInput
          placeholder="Type"
          name="type"
          value={type}
          handleChange={handleChange}
          options={requisitionOptions}
        />
      </SimpleGrid>
      <SimpleGrid columns={2} gap={4} mb="1rem">
        <NumberInput
          placeholder="Unit Price"
          name="unitPrice"
          value={unitPrice}
          onChange={handleChange}
          min={0}
        />
        <NumberInput
          placeholder="Number of Units Required"
          name="quantity"
          value={quantity}
          onChange={handleChange}
          min={0}
        />
      </SimpleGrid>
      <SimpleGrid columns={1} gap={4}>
        <TextInput
          placeholder="Subject of Procurement"
          name="subject"
          value={subject}
          handleChange={handleChange}
        />
        <Date name="date" value={date} onChange={handleChange} />
        <TextInput
          placeholder="Delivery Location"
          name="location"
          value={location}
          handleChange={handleChange}
        />
      </SimpleGrid>
      <SubmitButton isDisabled={isDisabled} />
    </Box>
  );
}

export default RequisitionsForm;
