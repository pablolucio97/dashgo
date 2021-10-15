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
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type CreateUserData = {
    name: string;
    email: string;
    password: string
    passwordConfirmation: string
}

const createUserSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Password obrigatório').min(6, 'Mínimo de 6 caracteres.'),
    passwordConfimation: yup.string().oneOf([null, yup.ref('password')], 'Senhas devem corresponder.')
})


export default function CreateUser() {

    const { register, handleSubmit, formState } = useForm<CreateUserData>({
        resolver: yupResolver(createUserSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserData> = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('ok')
    }

    return (
        <Box>
            <Header />
            <Flex w='100%' my='6' maxWidth={1200} mx='auto' px='6'>
                <Sidebar />
                <Box
                    as='form'
                    flex='1'
                    borderRadius={8}
                    bg='gray.800'
                    p={['6', '8']}
                    maxWidth={720}
                    onSubmit={handleSubmit(handleCreateUser)}
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
                            <Input
                                name='name'
                                label='Nome completo'
                                {...register('name')}
                                error={formState.errors.name}
                            />
                            <Text>E-mail</Text>
                            <Input
                                name='email'
                                label='E-mail'
                                type='email'
                                {...register('email')}
                                error={formState.errors.email}
                            />
                        </SimpleGrid>
                        <SimpleGrid
                            minChildWidth='240px' spacing='8' w='100%'
                        >
                            <Text>Senha</Text>
                            <Input
                                name='password'
                                label='Password'
                                type='password'
                                {...register('password')}
                                error={formState.errors.password}
                            />
                            <Text>Confirmação de senha</Text>
                            <Input
                                name='password'
                                label='Confirmar password'
                                type='password'
                                {...register('passwordConfirmation')}
                                error={formState.errors.passwordConfirmation}
                            />
                        </SimpleGrid>
                    </VStack>
                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button
                                colorScheme='pink'
                                border='none'
                                type='submit'
                                isLoading={formState.isSubmitting}
                            >
                                Salvar
                            </Button>
                            <Link href='/users' passHref >
                                <Button colorScheme='whiteAlpha' border='none'>
                                    Cancelar
                                </Button>
                            </Link>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}