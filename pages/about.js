import Navbar from "../components/Navbar";
import { Heading, Box, Text, UnorderedList, ListItem, Link,  } from "@chakra-ui/react"
import {ExternalLinkIcon} from "@chakra-ui/icons"
const about = () =>(
    <Box p={5}>
        <Navbar />
        <Heading as="h3" size="lg">This app was built using: </Heading>
        <UnorderedList p={10}>
            <ListItem>
                <Text fontSize="lg"><Link href="https://reactjs.org/" isExternal> React <ExternalLinkIcon mx="2px" /></Link></Text>
            </ListItem>
            <ListItem>
                <Text fontSize="lg"><Link href="https://nextjs.org/" isExternal> Next.js <ExternalLinkIcon mx="2px" /></Link></Text>
            </ListItem>
            <ListItem>
                <Text fontSize="lg"><Link href="https://chakra-ui.com" isExternal> Chakra design system <ExternalLinkIcon mx="2px" /></Link></Text>
            </ListItem>
            <ListItem>
                <Text fontSize="lg"><Link href="https://www.coindesk.com/price/bitcoin" isExternal> Coindesk Bitcoin Price Index API <ExternalLinkIcon mx="2px" /></Link></Text>
            </ListItem>
        </UnorderedList>
        <Text fontSize="lg"><Link href="https://www.coindesk.com/price/bitcoin" isExternal> Github <ExternalLinkIcon mx="2px" /></Link></Text>    
    </Box>
)
export default about  