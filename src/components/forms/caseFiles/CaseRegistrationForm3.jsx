import { useEffect } from "react";
import { SimpleGrid, Button, useToast, Heading, Flex } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import TextAreaField from '../../common/TextAreaField'
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
    fleetDatabaseInitialValues,
    fleetDatabaseOrderSchema,
} from "./schemas/fleetDatabase";


const CaseFilesForm3 = ({ onSubmit, isSubmitting, isError, error }) => {
    const toast = useToast();

    useEffect(() => {
        if (isError) {
            toast(toastError(error));
        }
    }, [isError, error, toast]);
    return (
        <Formik
            initialValues={fleetDatabaseInitialValues}
            validationSchema={fleetDatabaseOrderSchema}
            onSubmit={(values) => {
                onSubmit(values);
            }}
        >
            <SimpleGrid as={Form} p={5} gap={3} >
                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>1. Type of Issue/Matter/Case</Heading>
                    <TextField name="first_name" placeholder="Assult" />
                </SimpleGrid>

                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>2. Nature of Issue/Matter/Case</Heading>
                    <TextField name="first_name" placeholder="Criminal" />
                </SimpleGrid>

                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>3. How long has this been happening</Heading>
                    <TextField name="first_name" placeholder="00 days" />
                </SimpleGrid>

                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>4. Have you talked to anyone before</Heading>
                    <TextField name="first_name" placeholder="No" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>5. Kindly provide more details about the matter/case selected in 2. above</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>7. Tell us the person or organisation and the action that was taken.</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>
             
             <Button
                 type="submit"
                 borderRadius="full"
                 bgGradient="linear(to-r, purple.400, purple.700)"
                 _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
                 size="lg"
                 w="40%"
                 color="white"
                 isLoading={isSubmitting}
             >
                 Back
             </Button>
            <p></p>

         
             <Button
                 type="submit"
                 borderRadius="full"
                 bgGradient="linear(to-r, purple.400, purple.700)"
                 _hover={{ bgGradient: "linear(to-r, purple.600, purple.900)" }}
                 size="lg"
                 w="40%"
                 color="white"
                 isLoading={isSubmitting}
             >
                 Next
             </Button>

  

         </SimpleGrid>




            </SimpleGrid>
        </Formik>
    );
};

export default CaseFilesForm3;
