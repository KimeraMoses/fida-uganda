import { useEffect } from "react";
import { SimpleGrid, Button, useToast, Heading, Flex } from "@chakra-ui/react";
import TextField from "../../common/TextField";
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

                    <Heading fontSize="large" color='black'>2. Disability Assessment</Heading>

                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>

                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>
                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>
                <SimpleGrid columns={1} gap={5}>

                    <p>i. Do you have difficulty seeing even if you wear glasses</p>
                    <SimpleGrid columns={5} gap={5}>
                        <p>no</p> <p>no</p> <p>no</p> <p>no</p>
                    </SimpleGrid>

                </SimpleGrid>


            </SimpleGrid>
        </Formik>
    );
};

export default CaseFilesForm;
