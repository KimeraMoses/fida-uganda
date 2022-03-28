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


const CaseFilesForm6 = ({ onSubmit, isSubmitting, isError, error }) => {
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

                    <Heading fontSize="large" color='black'>12. Status</Heading>
                    <TextField name="first_name" placeholder="Pending Mediation" />
                </SimpleGrid>


                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>13. Refer</Heading>
                    <TextField name="first_name" placeholder="Legal Officer name" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>14. Reason for referal.</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <Heading fontSize="large" color='black'>15. Action taken.</Heading>
                    <TextAreaField name="first_name" placeholder="Type here" />
                </SimpleGrid>




            </SimpleGrid>
        </Formik>
    );
};

export default CaseFilesForm6;
