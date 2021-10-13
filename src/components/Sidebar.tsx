import {Box, Stack, Text, Icon, Link} from '@chakra-ui/react'
import { RiContactsLine, RiDashboard3Line, RiGitMergeLine, RiInputMethodLine, RiMessengerLine } from 'react-icons/ri'

export default function Sidebar(){
    return(
        <Box
            as='aside'
            w='64'
            mr='8'
        >
            <Stack
                spacing='12'
                align='flex-start'
            >
                <Box>
                    <Text fontWeigth='bold' color='gray.400' fontSize='small'>GERAL</Text>
                    <Stack 
                        spacing='4'
                        mt='8'
                        align='stretch'
                    >
                        <Link display='flex' align='center'>
                            <Icon as={RiDashboard3Line} fontSize='20'/>
                            <Text ml='4' fontWeigth='medium'>Dashboard</Text>
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiContactsLine} fontSize='20'/>
                            <Text ml='4' fontWeigth='medium'>Usuários</Text>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeigth='bold' color='gray.400' fontSize='small'>AUTOMAÇÃO</Text>
                    <Stack 
                        spacing='4'
                        mt='8'
                        align='stretch'
                    >
                        <Link display='flex' align='center'>
                            <Icon as={RiInputMethodLine} fontSize='20'/>
                            <Text ml='4' fontWeigth='medium'>Formulários</Text>
                        </Link>
                        <Link display='flex' align='center'>
                            <Icon as={RiGitMergeLine} fontSize='20'/>
                            <Text ml='4' fontWeigth='medium'>Automação</Text>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}