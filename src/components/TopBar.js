import React from "react"
import { Flex } from "rebass"
import styled from "styled-components"
import { display, width, zIndex, position, top, right } from "styled-system"

import Navigation from "./Navigation"
import Title from "./Title"
import useOpacity from "../hooks/use-opacity"

const Container = styled(Flex)(display, width, zIndex, position, top, right)
const mediaQuery = `@media (min-width: 1025px)`

const TopBar = () => {
  const { opacity } = useOpacity(400)

  return (
    <Container
      display="none"
      justifyContent="space-between"
      alignItems="baseline"
      position="fixed"
      top="0"
      right="0"
      zIndex="2"
      width={1}
      p={3}
      css={{
        [mediaQuery]: { display: `flex` },
      }}
    >
      <Title fontSize={[2, 3, 4]} marginBottom={0} opacity={opacity ? 0 : 1} />
      <Navigation />
    </Container>
  )
}

export default TopBar
