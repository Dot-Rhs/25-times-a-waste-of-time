import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AddTransaction from "../addTransaction";
import ChartSummary from "../chart";

const Summary = ({ isOpen, onClose, totalExpense, totalIncome }) => {
  return (
    <Box
      p="6"
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={{}}
    >
      <Flex
        w="full"
        justifyContent="center"
        alignItems="center"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row"
        }}
      >
        <Flex
          flex={1}
          w="full"
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.300"}>
            Balance is £{totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
            mb={2}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>£{totalIncome}</Heading>
              <Text color={"gray.600"}>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>£{totalExpense}</Heading>
              <Text color={"gray.600"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>
            <ChartSummary income={totalIncome} expense={totalExpense} />
          </Heading>
        </Box>
      </Flex>
      <AddTransaction onClose={onClose} isOpen={isOpen} />
    </Box>
  );
};

export default Summary;
