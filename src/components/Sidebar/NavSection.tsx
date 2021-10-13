import { Box, Link, Stack } from "@chakra-ui/layout";
import { Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { RiContactsLine, RiDashboard3Line } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: ReactNode
}

export default function NavSection({ children, title }: NavSectionProps) {
    return (
        <Box>
            <Text fontWeigth='bold' color='gray.400' fontSize='small'>{title}</Text>
            <Stack
                spacing='4'
                mt='8'
                align='stretch'
            >
                {children}
            </Stack>
        </Box>
    )
}