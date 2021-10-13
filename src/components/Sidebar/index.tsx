import { Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue, DrawerCloseButton } from "@chakra-ui/react";
import React from "react";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import SidebarNav from "./SidebarNav";


export default function SideBar() {

    const { isOpen, onClose } = useSidebarDrawer()

    const hasDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if (!hasDrawerSidebar) {
        return (<Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton
                        mt='6'
                        border='none'
                        bg='red.300'
                        cursor='pointer'
                    />
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav />
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>)
    }

    return (
        <Box
            as='aside'
            w='64'
            mr='8'
        >
            <SidebarNav />
        </Box>
    )
}