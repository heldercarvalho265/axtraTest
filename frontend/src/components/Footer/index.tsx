import { Flex ,Divider,Text} from "@chakra-ui/react";

export default function Footer(){
    return(
        <Flex h="30vh" bg="#1D2130" w="100%"  flexDir="column" justifyContent="space-between">
            <Flex h="90%">

            </Flex>
            <Flex h="10%" w="100%" justifyContent="space-around" alignItems="flex-end">
                <Divider my="4" w="38%" borderColor="white"/>
                <Text my="2" > --- </Text>
                <Divider my="4" w="38%" borderColor="white"/>
            </Flex>
            
        </Flex>
    )
}