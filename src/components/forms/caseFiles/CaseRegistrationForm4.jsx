import { useEffect } from "react";
import { SimpleGrid, Button, useToast, Heading, Flex, Radio } from "@chakra-ui/react";
import TextField from "../../common/TextField";
import TextAreaField from '../../common/TextAreaField'
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
    fleetDatabaseInitialValues,
    fleetDatabaseOrderSchema,
} from "./schemas/fleetDatabase";
import { beneficiariesColumns } from "../../../assets/tableColumns/beneficiaries";
import Table from '../../common/Table'


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
                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>8. Beneficiaries</Heading>
                    <Table
                        data={[]}
                        columns={beneficiariesColumns}
                    />
                </SimpleGrid>

                <SimpleGrid columns={2} gap={5}>

                    <Heading fontSize="large" color='black'>9. How did you know about FIDA</Heading>

                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Brochures</Radio>
                    <Radio >Friend/Relative</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Posters</Radio>
                    <Radio >Radio Program</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Legal Education</Radio>
                    <Radio >Local council</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >News Papers</Radio>
                    <Radio >Community Volunteer</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Workshops</Radio>
                    <Radio >FIDA - U Member</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Website or Social Media</Radio>
                    <Radio >Police</Radio>
                </SimpleGrid>
                <SimpleGrid columns={2} gap={5}>
                    <Radio >Other CSO</Radio>
                    <Radio >Other</Radio>
                </SimpleGrid>



            </SimpleGrid>
        </Formik>
    );
};

export default CaseFilesForm;
