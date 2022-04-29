import { Flex , Image,Input, Icon, HStack,Avatar,Text} from "@chakra-ui/react";

import NextLink from 'next/link'

import {RiNotificationLine, RiSearchLine, RiUserAddLine} from 'react-icons/ri'

export function HeaderAdmin(){
    return(
        <Flex
          w="100%"
          as="header"
          maxW={1480}
          h="20"
          mx="auto"
          mt="1.3"
          px="6"
          align="center"
          bg="gray.50"
          borderRadius={8}
        
        >
           <Flex
              as="label"
              flex="1"
              h="60%"
              py="4"
              px="5"
              ml="6"
              maxW={400}
              alignSelf="center"
              position="relative"
              borderRadius="full"
              bg="#F0F2FE"
              
              
            >
                <Input
                    variant="unstyled"
                    placeholder="Pesquisar ..."
                    //_placeholder={{color:""}}
                />

                <Icon as={RiSearchLine} fontSize="20" />
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing={8}
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    
                    <Icon as={RiNotificationLine}  fontSize="20 " color="gray.700" />
                    <Icon as={RiUserAddLine}  fontSize="20 " color="gray.700" />

                </HStack>
                <Flex align="center">
                    <Text fontSize="md" mr="4" textAlign="right">Helder Carvalho</Text>
                    <Avatar size='sm' name ="Helder Carvalho"/>
                </Flex>

            </Flex>

        </Flex>
        )
}