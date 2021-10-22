import React, { useEffect } from 'react'
import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Checkbox,
    Text,
    useBreakpointValue
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'
import Link from 'next/link'

export default function UserList() {

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
        .then(res => res.json())
        .then(data => console.log(data))
    }, [])


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
                >
                    <Flex
                        mb='8'
                        justify='space-between'
                        align='center'
                    >
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                        <Link href='/users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                {isWideScreen && 'Criar novo'}
                            </Button>
                        </Link>
                    </Flex>
                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th px={['4', '4', '6']} color='gray.300' width='8'>
                                    <Checkbox colorScheme='pink' />
                                </Th>
                                <Th>Usuário</Th>
                                {isWideScreen && <Th>Data de cadastro</Th>}
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4', '4', '6']}>
                                    <Checkbox colorScheme='pink' />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight='bold'>Pablo Lúcio</Text>
                                        <Text fontSize='sm' color='gray.300'>pablolucio_@hotmail.com</Text>
                                    </Box>
                                </Td>
                                {isWideScreen && <Td>04 de Abril, 2021</Td>}
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box>
            </Flex>
        </Box>
    )
}