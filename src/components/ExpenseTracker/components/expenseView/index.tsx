import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const ExpenseView = ({ data, type }) => {
  return (
    <Box
      flex={1}
      w="full"
      bg={"white"}
      mr={4}
      mt={10}
      p={5}
      pb={4}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={12}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income" : "£xpense"}
        </Heading>
      </Flex>
      {data.map((item, idx) => (
        <Flex
          bg={type === "income" ? "blue.50" : "red.50"}
          mt={4}
          justifyContent={"space-between"}
          alignItems={"center"}
          border={"1px solid"}
          borderColor={type === "income" ? "nlue.100" : "red.100"}
          p={4}
          borderRadius={8}
          key={type + idx}
        >
          <Flex alignItems={"center"} justifyContent={"center"}>
            <Text ml={3} fontWeight={"bold"} color={"gray.600"}>
              {item.description}
            </Text>
          </Flex>
          <Text>£{item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
};

export default ExpenseView;
