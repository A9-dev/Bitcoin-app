import {useColorMode, Button} from "@chakra-ui/react"
import {MoonIcon} from "@chakra-ui/icons"
function DarkModeButton() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <Button onClick={toggleColorMode}>
          <MoonIcon mr={2}/>

          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    )
  }
  export default DarkModeButton