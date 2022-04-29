import { Flex, Heading, Text,ScaleFade } from "@chakra-ui/react";
import TeamItem from './TeamItem'

export default function Team(){
  
    return (
        <Flex minH="40vh" pt="2rem" id="team" justifyContent="center">
        
            <Flex flexDir="column" w="35vw"  mt="6rem" ml="6rem">
                <Heading w="30vw" color="#272c70" mb="1.2rem" >
                    A NOSSA TALENTOSA EQUIPA
                </Heading>
                <Text w="30vw" fontSize="20px">
                    Astra, empresa de informática que atende a um público mais exigente e busca QUALIDADE em seus serviços.
                </Text>
            </Flex>
            <Flex w="60vw"  p="2rem" flexWrap="wrap">
            
                <TeamItem url="ana.png" name="Ana Monteiro" description="Gestora de Projeto" />
                <TeamItem url="default.png" name="Paulo Afonso" description="Programador FrontEnd" />
                <TeamItem url="ana.png" name="Maria Pires" description="Analista de Sistema" />
                <TeamItem url="default.png" name="Elton Alves" description="Programador Backend" />
                <TeamItem url="default.png" name="Mario Martins" description="Programador Gamer" />
                                
            </Flex>
        </Flex>
    )
}