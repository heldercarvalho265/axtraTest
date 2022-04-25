import { Flex, Heading, Text } from "@chakra-ui/react";
import TeamItem from './TeamItem'
export default function Team(){
    return (
        <Flex minH="40vh" pt="2rem" id="team">
            <Flex flexDir="column" w="35vw"  mt="6rem" ml="6rem">
                <Heading w="35vw" color="#272c70" mb="1.2rem">
                    A NOSSA TALENTOSA EQUIPA
                </Heading>
                <Text w="30vw" fontSize="20px">
                    Axtra, empresa de informática que atende a um público mais exigente e busca QUALIDADE em seus serviços.
                </Text>
            </Flex>
            <Flex w="65vw"  p="2rem" flexWrap="wrap">
                <TeamItem url="ana.png" name="Ana Monteiro" description="O vídeo é uma forma poderosa de provar o seu ponto de vista. Quando clica em Vídeo Online, pode colar o código incorporado para o vídeo que quer adicionar. Pode também escrever uma palavra-chave para procurar online o vídeo que melhor se adapta ao seu documento." />
                <TeamItem url="ana.png" name="Ana Monteiro" description="O vídeo é uma forma poderosa de provar o seu ponto de vista. Quando clica em Vídeo Online, pode colar o código incorporado para o vídeo que quer adicionar. Pode também escrever uma palavra-chave para procurar online o vídeo que melhor se adapta ao seu documento." />
                <TeamItem url="ana.png" name="Ana Monteiro" description="O vídeo é uma forma poderosa de provar o seu ponto de vista. Quando clica em Vídeo Online, pode colar o código incorporado para o vídeo que quer adicionar. Pode também escrever uma palavra-chave para procurar online o vídeo que melhor se adapta ao seu documento." />
            
            </Flex>
        </Flex>
    )
}