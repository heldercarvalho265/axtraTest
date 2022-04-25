import { Flex , Heading, Text} from "@chakra-ui/react";
import ServiceItem from './ServiceItem'

export default function Service(){
    return(
    <Flex id="service"minH="100%" bgImg={"images/gradiente4.svg"} bgRepeat="no-repeat" bgSize={["100%", "100%"]} flexDir="column" w="100%" h="100%">
        <Flex flexDir="column" h="20vh"  alignItems={"center"}  justifyContent="center">
            <Heading>
                Nossos Serviços
            </Heading>
            <Text >
                Axtra, empresa de informática que atende a um público mais exigente e busca QUALIDADE em seus serviços.
            </Text>
        </Flex>
        
        <Flex minH="40vh" w="94vw" borderRightRadius="50" bg="gray.50" flexDir="row" flexWrap="wrap" alignItems="center" justifyContent="space-around" flex="3" mb="2.5rem">
            <ServiceItem icon="soft" name="Desenvolvimento DE SOFTWARE" description="aaaaaaaaaa aaaaaaaa sssssssss dddddddd ddddf ffffffffffff gggggg cccccccccc sssssssssss" />
            <ServiceItem icon="soft" name="" description="" />
            <ServiceItem icon="soft" name="" description="" />
            <ServiceItem icon="soft" name="Desenvolvimento DE SOFTWARE" description="" />
            <ServiceItem icon="soft" name="Desenvolvimento DE SOFTWARE" description="" />
            <ServiceItem icon="soft" name="Desenvolvimento DE SOFTWARE" description="" />
        </Flex>

    </Flex>)
}