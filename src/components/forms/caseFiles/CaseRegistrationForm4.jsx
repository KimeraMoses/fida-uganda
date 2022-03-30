import { useEffect } from "react";
import { SimpleGrid, Button, useToast, Heading,  Radio } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
    fleetDatabaseInitialValues,
    fleetDatabaseOrderSchema,
} from "./schemas/fleetDatabase";
import { beneficiariesColumns } from "../../../assets/tableColumns/beneficiaries";
import Table from '../../common/Table'


const CaseFilesForm4 = ({ onSubmit, isSubmitting, isError, error }) => {
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

export default CaseFilesForm4;
