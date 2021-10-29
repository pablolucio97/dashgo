import React, { useEffect, useState } from 'react'
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
    useBreakpointValue,
    Spinner,
    Link
} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri'
import NextLink from 'next/link'

import useUsers from '../../hooks/useUsers'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Pagination from '../../components/Pagination'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'

export default function UserList() {


    const [pageIndexPagination, setPageIndexPagination] = useState(10)

    const { data, isLoading, isFetching, error } = useUsers()

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })


    async function handlePrefetchUser(userId: string) {
        await queryClient.prefetchQuery(['user', userId], async () => {
            const response = await api.get(`/users/${userId}`)
            return response.data

        }, {
            staleTime: 1000 * 60 * 10
        })

    }

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
                        <Heading size='lg' fontWeight='normal'>
                            Usuários {!isLoading && isFetching && <Spinner size='sm' />}
                        </Heading>
                        <NextLink href='/users/create' passHref>
                            <Button
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='pink'
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                {isWideScreen && 'Criar novo'}
                            </Button>
                        </NextLink>
                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex>
                            <Text>Falha ao carregar dados dos usuários</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table colorScheme='whiteAlpha' >
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
                                    {data.map(user => (
                                        <Tr key={user.id}>
                                            <Td px={['4', '4', '6']}>
                                                <Checkbox colorScheme='pink' />
                                            </Td>
                                            <Td>
                                                <Box>
                                                    <Link
                                                        color='purple.400'
                                                        onMouseEnter={() => handlePrefetchUser(user.id)}
                                                    >
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                    </Link>
                                                    <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                </Box>
                                            </Td>
                                            {isWideScreen && <Td>{user.createdAt}</Td>}
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination
                                totalCountOfRegisters={200}
                                currentPage={pageIndexPagination}
                                onPageChange={() => setPageIndexPagination(14)}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}