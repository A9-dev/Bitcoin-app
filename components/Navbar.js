import { Button, Center, Stack } from "@chakra-ui/react"
import Link from "next/link"
import DarkModeButton from "../components/DarkModeButton"

const Navbar = () => (
    <Center p={2}>
        <Stack direction="row" spacing={4}>
            <Link href="/">
                <Button>
                    Home
            </Button>
            </Link>
            <Link href="/about">
                <Button>
                    About
            </Button>
            </Link>
            <DarkModeButton />
        </Stack>
    </Center>
)
export default Navbar