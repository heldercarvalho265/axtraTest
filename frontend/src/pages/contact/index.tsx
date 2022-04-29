import { Flex,Heading,Text,
    FormControl,
    SimpleGrid,
    FormLabel,
    FormErrorMessage,
    FormHelperText ,Input,Stack,Textarea,Button,Icon, Box} from "@chakra-ui/react";

    import { MdSend,MdLocalPhone,MdOutlineEmail,MdSupportAgent} from "react-icons/md";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Contact(){
    return (
        <>
        <Header/>
        <Flex minH="100vh" pt={["5vh","10vh"]} flexDir="column" align="center">
            <Flex
                className='teste'
                align={"center"}
                h={"1000px"}
                w={"900px"}
                right="0"
                top={"0"}
                position={"fixed"}
                zIndex="-5">
                <img src="images/Blur Gradient.svg"alt="" />
            </Flex>
            {/**Top */}
            <Heading h={["10vh","5vh","8vh","10vh","10vh","15vh"]}  display = "flex" alignItems="center" justifyContent="center" fontSize={["24px","24px","36px","24px","24px","2xl"]} color="#272c70">
               ENTRE EM CONTATO CONOSCO
            </Heading>

            {/**Base */}
            <Flex bg="#F0F2FE" borderRadius="10px" minH="65vh" w="80vw" m="1rem" h={["100%",""]} flexDir={["column","column","column","row","row","row"]}>
                {/**Base left */}
                <Flex flexDir="column" w={["100%","100%","100%","40vw"]} p={["1rem","2rem"]} alignItems={["center","center","center","flex-start"]}>
                    <Text fontSize={["md","xl"]} fontWeight="500" color="#272c70">
                        Envie uma mensagem!
                    </Text>
                    <Text mt=".5rem" fontSize={["sm","md"]} fontWeight="400" color="#272c70">
                        Retornaremos o mais breve possível.
                    </Text>


                        <Flex flexDir="column" mt="2rem">
                            <Stack spacing={4}>
                                <Flex gap={2}>
                                    <Input bg="gray.50" placeholder="Nome Completo..."/>
                                    <Input  bg="gray.50" placeholder="Nome Da Empresa..."/>
                                </Flex>
                                
                                <Input  type='email' bg="gray.50" placeholder="Email do trabalho..."/>
                                <Input  bg="gray.50" placeholder="Assunto..."/>
                                <Textarea bg="gray.50" placeholder='Mensagem...' />
                                <Button leftIcon={<MdSend />} colorScheme='yellow' variant='outline' >
                                    Enviar
                                </Button>
                          
                            </Stack>
                                  
                        </Flex>
                    <Flex>
                    </Flex>
                    
                </Flex>
                {/**Base right */}
                <Flex flexDir="column" justifyContent="center" alignItems={["center","center","center","flex-start"]} pt="2rem" w={["100%","100%","100%","40vw"]}>
                    <Flex alignItems="center" mb="2rem">
                       <Box w="45px" h="45px" bg="#fc9754" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <Icon
                                color={"white"}
                                as={MdLocalPhone}
                                w={6}
                                h={6}
                                />
                       </Box>
                        <Flex flexDir="column" pl="1.5rem" h="55px" justifyContent="space-between">
                            <Text fontSize="xl" fontWeight="700" >+ 238 9 01 01 01</Text>
                            <Text fontSize="sm">CVMOVEL</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems="center" mb="2rem">
                       <Box w="45px" h="45px" bg="#fc9754" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <Icon
                                color={"white"}
                                as={MdSupportAgent}
                                w={6}
                                h={6}
                                />
                       </Box>
                        <Flex flexDir="column" pl="1.5rem" h="55px" justifyContent="space-between">
                            <Text fontSize="xl" fontWeight="700" > astra.solutions@astra.cv</Text>
                            <Text fontSize="sm">Email do suporte</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems="center" mb="2rem">
                       <Box w="45px" h="45px" bg="#fc9754" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <Icon
                                color={"white"}
                                as={MdOutlineEmail}
                                w={6}
                                h={6}
                                />
                       </Box>
                        <Flex flexDir="column" pl="1.5rem" h="55px" justifyContent="space-between">
                            <Text fontSize="xl" fontWeight="700" >astra@astra.cv</Text>
                            <Text fontSize="sm">Email de serviço</Text>
                        </Flex>
                    </Flex>
                    
                    

                </Flex>
                
            </Flex>
           
        </Flex>
        <Footer/> 

      </>
    )
  }