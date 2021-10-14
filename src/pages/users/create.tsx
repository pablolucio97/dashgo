import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Divider,
    Input,
    SimpleGrid,
    VStack,
    HStack,
    Button,
    Text

} from '@chakra-ui/react'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function CreateUser() {
    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1200} mx='auto' px='6'>
                <Sidebar />
                <Box
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p={['6', '8']}
                    maxWidth={720}
                >
                    <Heading
                        size='lg'
                        fontWeigth='normal'
                    >
                        Crair usuário
                    </Heading>
                    <Divider my='6' borderColor='gray.700' />
                    <VStack spacing='8'>
                        <SimpleGrid
                            minChildWidth='240px' spacing='8' w='100%'
                        >
                        <Text p='0'>Nome</Text>
                            <Input name='name' label='Nome completo' />
                            <Text>E-mail</Text>
                            <Input name='email' label='E-mail' type='email' />
                        </SimpleGrid>
                        <SimpleGrid
                            minChildWidth='240px' spacing='8' w='100%'
                        >
                            <Text>Senha</Text>
                            <Input name='password' label='Password' type='password' />
                            <Text>Confirmação de senha</Text>
                            <Input name='password' label='Confirmar password' type='password' />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button colorScheme='pink' border='none'>Salvar</Button>
                            <Button colorScheme='whiteAlpha' border='none'>Cancelar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}