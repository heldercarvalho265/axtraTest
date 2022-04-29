import { Flex,Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator, Box, Heading, Button, Icon, useDisclosure, Table, Thead, Tr, Th, Checkbox, Tbody, Td, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { RiAddLine, RiDeleteBin6Line, RiEyeLine, RiH1, RiPencilLine } from "react-icons/ri";
import Footer2 from "../../../components/Footer/footer2";
import { HeaderAdmin } from "../../../components/Header/headerAdmin";
import { Pagination } from "../../../components/Pagination";
import { SideBar } from "../../../components/SideBar";


export default function Team(){
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
    return(
        <Flex w="100%" h = "100%" bg="#F0F2FE" flexDir="column">
            <Flex w="100%" h = "100%" bg="#F0F2FE" >
                
                <SideBar />

                <Flex w="100%" my="4" maxW={1480} px="6" flexDir="column">
                <HeaderAdmin/>
                <Breadcrumb separator='-' my="1.3rem">
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Administração</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                                    <BreadcrumbLink href='#'>Equipa</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Box flex="1" borderRadius={8} mx="auto" p="8" bg="gray.50" w="100%">

                     
                </Box>

                </Flex>
            </Flex>
            
            <Footer2/>  
        </Flex>
        
    )
}