import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Flex, Box, Text, Link as RebassLink } from "rebass/styled-components";

import Container from "../components/Container";

const NewLink = styled(RebassLink)`
  padding-right: 10px;
  padding-left: 10px;
  a {
    color: yellow;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Box px={2} py={2} color="white" bg="black">
      <Container>
        <Flex px={2} color="white" alignItems="center">
          <Text p={2} fontWeight="bold">
            Rebass
          </Text>
          <Box mx="auto" />
          <NewLink>
            <Link to="/home">Home</Link>
          </NewLink>
          <NewLink>
            <Link to="/about">About</Link>
          </NewLink>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
