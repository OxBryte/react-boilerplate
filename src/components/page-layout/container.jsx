import { Box } from "@chakra-ui/react"

const ContainLayout = props => {
    return (
        <Box mx="auto" maxW="8xl" px={{ base: '4', md: '8', lg: '12' }} {...props}>
            {props.children}
        </Box>
    )
}

export default ContainLayout