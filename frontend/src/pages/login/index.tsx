import { Flex,Image, Button, Stack,Text} from "@chakra-ui/react";

    import { MdSend,MdLocalPhone,MdOutlineEmail,MdSupportAgent} from "react-icons/md";
import NextLink from 'next/link'
import { Input } from "../../components/Form/input";

export default function Login(){
    return (

        <Flex w="100vw" h = "100vh" justifyContent="center" alignItems="center" flexDir="column">

            <NextLink href={"/"} passHref>
                <Image
                    //{["10vh","5vh","5vh","10vh","10vh","15vh"]}
                    w={"120px"}
                    objectFit='cover'
                    src='/images/logo_s.svg'
                    alt='Logo da empresa Axtra'
                />
            </NextLink>
            <Flex flexDir="column" mt = "2rem" w="100%" maxW="400px" p="8" bg="#F0F2FE"  alignItems="center" borderRadius={8} justifyContent="center">
                <Text fontSize="20" fontWeight="500" mb="3rem">
                    Login
                </Text>
                <Flex flexDir="column" as="form" alignItems="center" borderRadius={8} justifyContent="center" w="100%">
                    <Stack spacing="5" 
                        w="100%">

                        <Input
                        name="email"
                        type="email"
                        placeholder="Email..."
                        />

                        <Input
                        name="password"
                        type="password"
                        placeholder="Password..."
                        />


                    </Stack>
                    
                    <Button type="submit" my="2rem" w="100%" colorScheme="orange">Entrar</Button>
                
                </Flex>
            
            </Flex>
           
        </Flex>

      
    )
  }