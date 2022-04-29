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


export default function Users(){
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
                                    <BreadcrumbLink href='#'>Utilizador</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                <Box flex="1" borderRadius={8} mx="auto" p="8" bg="gray.50" w="100%">

                    <Flex mb="8" justify="space-between" align="center" >

                        <Heading size="md" fontWeight="500">Lista de Utilizadores </Heading>
                    
                        <Button
                        colorScheme="orange"
                        as="a"
                        size="sm"
                        fontSize="md"
                        fontWeight="500"
                        leftIcon={<Icon as={RiAddLine}fontSize="20" />}
                        onClick={onOpen}
                        >
                            Criar novo
                        </Button>                    
                        <Modal
                            isOpen={isOpen}
                            onClose={onClose}
                            size="4xl"
                            
                        >
                            <ModalOverlay />
                            <ModalContent >
                            <ModalHeader>Novo Utilizado</ModalHeader>
                            <ModalCloseButton />

                            <ModalBody pb={6}>
                                <FormControl>
                                <FormLabel>First name</FormLabel>
                                <Input  placeholder='First name' />
                                </FormControl>

                                <FormControl mt={4}>
                                <FormLabel>Last name</FormLabel>
                                <Input placeholder='Last name' />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={onClose} mr={3} fontWeight="500">Cancelar</Button>
                                <Button colorScheme='orange'  fontWeight="500">
                                Guardar
                                </Button>
                            </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Flex>

                    <Table >
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" w="8">
                                    <Checkbox colorScheme="orange"/>
                                </Th>
                                <Th >
                                    Utilizador
                                </Th>
                                <Th >
                                    Email
                                </Th>
                                <Th >
                                    Data Registo
                                </Th>
                                <Th >
                                    Ação
                                </Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="orange"/>
                                </Td>
                                <Td px="6">
                                    Helder Carvalho
                                </Td>
                                <Td >
                                    heldercarvalho265@gmail.com
                                </Td>
                                <Td >
                                    28 de Abril, 2022
                                </Td>
                                <Td >
                                    <Box>
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Detalhes'
                                            fontSize="20"
                                            icon={<RiEyeLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Editar'
                                            fontSize="20"
                                            icon={<RiPencilLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            color="red"
                                            aria-label='Remover'
                                            fontSize="20"
                                            icon={<RiDeleteBin6Line />}
                                        />
                                        
                                    </Box>
                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="orange"/>
                                </Td>
                                <Td px="6">
                                    Helder Carvalho
                                </Td>
                                <Td >
                                    heldercarvalho265@gmail.com
                                </Td>
                                <Td >
                                    28 de Abril, 2022
                                </Td>
                                <Td >
                                    <Box>
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Detalhes'
                                            fontSize="20"
                                            icon={<RiEyeLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Editar'
                                            fontSize="20"
                                            icon={<RiPencilLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            color="red"
                                            aria-label='Remover'
                                            fontSize="20"
                                            icon={<RiDeleteBin6Line />}
                                        />
                                        
                                    </Box>
                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td px="6">
                                    <Checkbox colorScheme="orange"/>
                                </Td>
                                <Td px="6">
                                    Helder Carvalho
                                </Td>
                                <Td >
                                    heldercarvalho265@gmail.com
                                </Td>
                                <Td >
                                    28 de Abril, 2022
                                </Td>
                                <Td >
                                    <Box>
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Detalhes'
                                            fontSize="20"
                                            icon={<RiEyeLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            aria-label='Editar'
                                            fontSize="20"
                                            icon={<RiPencilLine />}
                                            color="blue.700"
                                        />
                                        <IconButton
                                            bg="transparent"
                                            color="red"
                                            aria-label='Remover'
                                            fontSize="20"
                                            icon={<RiDeleteBin6Line />}
                                        />
                                        
                                    </Box>
                                
                                </Td>
                            </Tr>
                            
                        </Tbody>
                        
                    </Table>

                <Pagination/>

                </Box>

                </Flex>
            </Flex>
            
            <Footer2/>  
        </Flex>
        
    )
}