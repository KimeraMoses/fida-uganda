import { useEffect } from "react";
import { SimpleGrid, Button, useToast, Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { toastError } from "../../../lib/toastDetails";
import {
    fleetDatabaseInitialValues,
    fleetDatabaseOrderSchema,
} from "./schemas/fleetDatabase";


const CaseFilesForm2 = ({ onSubmit, isSubmitting, isError, error }) => {
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

export default CaseFilesForm2;
