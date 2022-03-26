import { Link } from "react-router-dom";
import { Heading, Icon, Flex } from "@chakra-ui/react";
import { Badge } from '@chakra-ui/react'
import { MdOutlineMessage } from "react-icons/md";
import { MdAttachFile } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";



import { Stack, HStack, VStack } from '@chakra-ui/react'

const TasksCard = ({ title, icon, to, cardContent,  }) => {
    return (
        <Link to={to}>
            <Flex
                p={5}
                borderColor="purple.800"
                boxShadow="lg"
                bgColor="white"
                borderRadius="xl"
                minW="17rem"
                bgGradient="linear(to-br, purple.50, purple.100)"
                color="purple.600"
                flexDir="column"
                cursor="pointer"
            >
                <Flex mb={5} >
                    <Stack direction='row'>
                        <Badge colorScheme='purple'>Legal Aid</Badge>
                        <Badge colorScheme='green'>Court Case</Badge>
                        <Badge colorScheme='red'>Legal Aid</Badge>
                    </Stack>

                  
                </Flex>

                <Heading fontSize="md" color='black'>{title}</Heading>
                <p>{cardContent}</p>
           
            <Flex justifyContent={'space-between'}>
                <Stack direction='row'>
                    <Badge colorScheme='purple'>Urgent</Badge>
                    <Badge colorScheme='green'><Icon as={MdAttachFile} w={5} h={5} style={{transform: 'rotate(45deg)'}} /></Badge>
                    <Badge colorScheme='red'><Icon as={MdOutlineMessage} w={5} h={5}  /></Badge>
                </Stack>
                  <Icon as={MdOutlineAccountCircle} w={8} h={8} />
            </Flex>
            </Flex>
        </Link>
    );
};

export default TasksCard;
