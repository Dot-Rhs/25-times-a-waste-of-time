import { Box, ChakraProvider, Container, Flex } from "@chakra-ui/react";
import theme from "./theme";
import GlobalState from "./context";
import Main from "./components/main";

const ExpenseTracker = () => {
  return (
    <GlobalState>
      <ChakraProvider theme={theme}>
        <Container bg={"#f8"} maxW={"Container.3xl"} height={"100vh"} p={"0"}>
          <Flex height={"full"}>
            <Box
              height={"full"}
              flex={5}
              w={["20%", "30%", "20%", "50%", "60%"]}
            >
              <Main />
            </Box>
          </Flex>
        </Container>
      </ChakraProvider>
    </GlobalState>
  );
};

export default ExpenseTracker;
