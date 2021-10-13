import { Flex } from '@chakra-ui/react'
import Logo from './Header/Logo'
import Profile from './Header/Profile'
import SearchBox from './Header/SearchBox'
import NotificationsNav from './Header/NotificationsNav'

export default function Header() {
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
            <Logo />
            <SearchBox />
            <Flex
                align='center'
                ml='auto'
            >
                <NotificationsNav />
                <Profile />
            </Flex>
        </Flex>
    )
}