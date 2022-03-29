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
                <SimpleGrid columns={3} gap={5}>

                    <Heading fontSize="large" color='black'>BIO DATA</Heading>
                    <Heading fontSize="large" color='black'>COMPLAINANT</Heading>
                    <Heading fontSize="large" color='black'>RESPONDENT</Heading>

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>NAME</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>SEX</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>AGE</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>COUNTRY</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>NATIONAL IDENTIFICATION No</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>DISTRICT</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>SUB-COUNTY/TOWN COUNCIL</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>PARISH</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>VILLAGE</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>TELEPHONE NUMBER</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>MARITAL STATUS</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>ACCOMPANIED BY</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>NUMBER OF BENEFICIARIES</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>JOB</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>
                <SimpleGrid columns={3} gap={5}>

                    <h1>PLACE OF WORK</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>LEVEL OF EDUCATION</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>PREFFERED LANGUAGE SPOKEN</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>

                <SimpleGrid columns={3} gap={5}>

                    <h1>RELATIONSHIP WITH RESPONDENT</h1>
                    <TextField name="first_name" placeholder="Type here" />
                    <TextField name="first_name" placeholder="Type here" />

                </SimpleGrid>



            </SimpleGrid>
        </Formik>
        
    );
};

export default CaseFilesForm;
