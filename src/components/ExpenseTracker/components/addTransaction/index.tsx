import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import useGlobalContext from "../../context/useGlobalContext";

const AddTransaction = ({ onClose, isOpen }) => {
  const { formData, setFormData, value, setValue, handleFormSubmit } =
    useGlobalContext();

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction Description"
                name="description"
                type="text"
                onChange={handleFormChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Enter Transaction</FormLabel>
              <Input
                placeholder="Enter Transaction Amount"
                name="amount"
                type="number"
                onChange={handleFormChange}
              />
            </FormControl>
            <RadioGroup mt="5" value={value} onChange={setValue}>
              <Radio
                checked={formData.type === "income"}
                value="income"
                name="type"
                colorScheme="blue"
                mr="2"
                onChange={handleFormChange}
              >
                Income
              </Radio>
              <Radio
                checked={formData.type === "expense"}
                value="expense"
                name="type"
                colorScheme="red"
                onChange={handleFormChange}
              >
                Expense
              </Radio>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button mr="4" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransaction;
