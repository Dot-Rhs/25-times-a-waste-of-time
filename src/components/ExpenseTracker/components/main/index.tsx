import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expenseView";
import useGlobalContext from "../../context/useGlobalContext";
import { useEffect } from "react";

const Main: React.FC = () => {
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransactions
  } = useGlobalContext();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) =>
      item.type === "income"
        ? (income = income + parseFloat(`${item.amount}`))
        : (expense = expense + parseFloat(`${item.amount}`))
    );

    setTotalExpense(() => expense);
    setTotalIncome(() => income);
  }, [allTransactions]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} pr={5} pl={5}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        mt={12}
        mb="2"
      >
        <Heading
          color={"blue.400"}
          display={["none", "block", "block", "block", "block"]}
        >
          Expense Tracker
        </Heading>
        <Flex alignItems={"center"}>
          <Button onClick={onOpen} bg={"blue.300"} color={"black"} ml={4}>
            Add New Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary
        isOpen={isOpen}
        onClose={onClose}
        totalExpense={totalExpense}
        totalIncome={totalIncome}
      />
      <Flex
        w="full"
        alignItems={"flex-start"}
        justifyContent={"space-evenly"}
        flexDir={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "expense")}
          type="expense"
        />
        <ExpenseView
          data={allTransactions.filter((item) => item.type === "income")}
          type="income"
        />
      </Flex>
    </Flex>
  );
};

export default Main;
