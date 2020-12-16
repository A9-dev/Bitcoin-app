import Navbar from "../components/Navbar"
import { Heading, Box, Center, Menu, MenuList, MenuItem, MenuButton, Button, Text, Stat, StatLabel, StatNumber, StatHelpText, HStack } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"
import React, { useState } from "react"
import Disclaimer from "../components/Disclaimer"

export default function Home(props) {
  var cool
  const [currency, setCurrency] = useState("GBP")
  if (currency == "GBP") {
    cool = <Box borderWidth="1px" borderRadius="lg" p={5}><Stat>
      <StatLabel>Bitcoin rate for GBP:</StatLabel>
      <StatNumber>£{props.bpi.GBP.rate}</StatNumber>
      <StatHelpText>Last updated: {props.time.updateduk}</StatHelpText>
    </Stat></Box>
  } else if (currency == "EUR") {
    cool = <Box borderWidth="1px" borderRadius="lg" p={5}><Stat>
      <StatLabel>Bitcoin rate for EUR:</StatLabel>
      <StatNumber>€{props.bpi.EUR.rate}</StatNumber>
      <StatHelpText>Last updated: {props.time.updateduk}</StatHelpText>
    </Stat></Box>
  } else if (currency == "USD") {
    cool = <Box borderWidth="1px" borderRadius="lg" p={5}><Stat>
      <StatLabel>Bitcoin rate for USD:</StatLabel>
      <StatNumber>${props.bpi.USD.rate}</StatNumber>
      <StatHelpText>Last updated: {props.time.updateduk}</StatHelpText>
    </Stat></Box>
  }

  return (
    <Box p={2}>
      <Navbar />
      <Center m={5}>
        {cool}
      </Center>
      <Center m={2}>
        <HStack>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Currency
        </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setCurrency("GBP")}>GBP</MenuItem>
              <MenuItem onClick={() => setCurrency("EUR")}>EUR</MenuItem>
              <MenuItem onClick={() => setCurrency("USD")}>USD</MenuItem>
            </MenuList>
          </Menu>
          <Disclaimer disclaimer={props.disclaimer} />
        </HStack>
      </Center>
    </Box >
  )
}

Home.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  const data = await res.json()
  return data
}