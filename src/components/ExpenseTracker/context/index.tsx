import { createContext, useMemo, useState } from "react";

interface IFormData {
  type: string;
  amount: number;
  description: string;
}

interface ITransactions extends IFormData {
  id: number;
}

interface IContext {
  formData: IFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      type: string;
      amount: number;
      description: string;
    }>
  >;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  totalExpense: number;
  setTotalExpense: React.Dispatch<React.SetStateAction<number>>;
  totalIncome: number;
  setTotalIncome: React.Dispatch<React.SetStateAction<number>>;
  allTransactions: ITransactions[];
  setAllTransactions: React.Dispatch<React.SetStateAction<ITransactions[]>>;
  handleFormSubmit: (currentFormData: IFormData) => void;
}

export const GlobalContext = createContext<IContext | null>(null);

const GlobalState = ({ children }) => {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: ""
  });
  const [value, setValue] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState<ITransactions[]>([]);

  const handleFormSubmit = (currentFormData: IFormData) => {
    if (!currentFormData.description || !currentFormData.amount) return;

    setAllTransactions((prev) => [
      ...prev,
      { ...currentFormData, id: Date.now() }
    ]);
  };

  return (
    <GlobalContext.Provider
      value={useMemo(
        () => ({
          formData,
          setFormData,
          value,
          setValue,
          totalExpense,
          setTotalExpense,
          totalIncome,
          setTotalIncome,
          allTransactions,
          setAllTransactions,
          handleFormSubmit
        }),
        [
          formData,
          setFormData,
          value,
          setValue,
          totalExpense,
          setTotalExpense,
          totalIncome,
          setTotalIncome,
          allTransactions,
          setAllTransactions,
          handleFormSubmit
        ]
      )}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
