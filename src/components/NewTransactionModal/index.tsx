import { FormEvent, useState } from "react";
import Modal from "react-modal";
import closeImage from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, RadioBox, TransictionTypeContainer } from "./styles";

interface NewTransactionModalOpen {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalOpen) {

    const { createTransaction } = useTransactions();
    
    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
      event.preventDefault();

      createTransaction({
          title,
          amount,
          category,
          type
      });

      setTitle('');
      setAmount(0);
      setCategory('');
      setType('deposit');
      onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className={"react-modal-content"}>

            <h2>Cadastrar Transação</h2>
            <button type="button" onClick={onRequestClose}>
                <img src={closeImage} alt="Fechar" className="react-modal-close" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <input placeholder="título" value={title} onChange={event => setTitle(event.target.value)}/>
                <input placeholder="Valor" type="number" value={amount} onChange={event => setAmount(Number(event.target.value))}/>
                <TransictionTypeContainer>

                    <RadioBox 
                    type="button" 
                    onClick={() => {setType('deposit');}} 
                    isActive={type === 'deposit'}
                    activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" className="" />
                        <span>Entrada</span>
                    </RadioBox>


                    <RadioBox 
                    type="button" 
                    onClick={() => {setType('withdraw');}} 
                    isActive={type === 'withdraw'}
                    activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saída" className="" />
                        <span>Saída</span>
                    </RadioBox>



                </TransictionTypeContainer>
                <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    );

}