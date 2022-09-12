import {Button, SimpleGrid, useToast} from "@chakra-ui/react";
import { useEffect } from "react";
import InputField from "../../../common/UI/InputField/InputField";
import classes from "./NewFidaProjectForm.module.css";
import { toastError } from "../../../../lib/toastDetails";
import withForm from "../../../../hoc/withForm";

const NewFidaProjectForm = ({ isSubmitting, isError, error }) => {
  const toast = useToast();

  useEffect(() => {
    if (isError) {
      toast(toastError(error));
    }
  }, [isError, error, toast]);

  return (
 

      <div className={classes.new_project_wrapper}>

          <div className={classes.field_wrapper}>
            <div className={classes.field_label}>Personal Information</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Project Name" name="name" />
              <InputField placeholder="Funder" name="funder" />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField placeholder="Duration" name="duration" />
              <InputField placeholder="Donor Funds" name="donor_funds" />
            </SimpleGrid>
          </div>
          <div className={classes.field_wrapper}>
            <div className={classes.field_label}>Personal Location</div>
            <SimpleGrid columns={2} spacing={2}>
              <InputField
                placeholder="District of Operation"
                name="districts_of_operation"
              />
              <InputField
                placeholder="SubCounty of Operation"
                name="subcounties_of_operation"
              />
            </SimpleGrid>
            <SimpleGrid columns={2} spacing={2}>
              <InputField
                placeholder="Parishes of Operation"
                name="parishes_of_operation"
              />
              <InputField
                placeholder="Villages of operation"
                name="villages_of_operation"
              />
            </SimpleGrid>
            <InputField placeholder="Target Group" name="targetGroup" />
          </div>
          <hr />
          <div className={classes.field_wrapper}>
            <SimpleGrid columns={2} spacing={2}>
              <InputField
                type="date"
                placeholder="Start Date"
                name="startDate"
              />
              <InputField type="date" placeholder="End Date" name="endDate" />
            </SimpleGrid>
            <InputField placeholder="Project Main objective" name="objective" />
          </div>
          <div style={{ float: "right", padding: "20px 0" }}>
            {/*<FormButton variant="colored" isSubmitting={isSubmitting}>*/}
            {/*  Add Project*/}
            {/*</FormButton>*/}
              <Button
                  mt={5}
                  type="submit"
                  borderRadius="full"
                  bgGradient="linear(to-r, purple.400, purple.700)"
                  _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
                  size="lg"
                  w="100%"
                  color="white"
                  isLoading={isSubmitting}
              >
                  Add Project
              </Button>
          </div>
      </div>
  );
};

export default withForm(NewFidaProjectForm);
