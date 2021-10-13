import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import Logo from '../Header/Logo'
import Profile from '../Header/Profile'
import SearchBox from '../Header/SearchBox'
import NotificationsNav from '../Header/NotificationsNav'
import { useSidebarDrawer } from '../../context/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'
import React from 'react'

export default function Header() {

    const { onOpen } = useSidebarDrawer()

    const isWideScreen = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex
            as='header'
            w='100%'
            maxWidth={1200}
            h='20'
            px='6'
            mt='4'
            mx='auto'
            align='center'
        >
            {!isWideScreen && (
                <IconButton
                    icon={<Icon as={RiMenuLine} />}
                    fontSize='24'
                    variant='unstyled'
                    onClick={onOpen}
                    aria-label='Open naviagation'
                    mr='2'
                    border='none'
                >
                </IconButton>
            )}
            <Logo />
            {isWideScreen && <SearchBox />}
            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav />
                <Profile showProfileData={isWideScreen} />
            </Flex>
        </Flex>
    )
}