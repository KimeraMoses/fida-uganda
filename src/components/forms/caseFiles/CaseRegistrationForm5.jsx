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


const CaseFilesForm = ({ onSubmit, isSubmitting, isError, error }) => {
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

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>9. What kind of support you need? Tell us your expectation</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>10. Comments by leag officer.</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>11. Declaration.</Heading>
                    <p>I have read and discussed the above information with the officer and understood the risks and benefits involved, the nature and limits  of confidentiality, and what is expected of me as a client of the legal aid services. I hereby instruct FIDA - Uganda to take over the management  of my case. </p>
                </SimpleGrid>




            </SimpleGrid>
        </Formik>
    );
};

export default CaseFilesForm;
