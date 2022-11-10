import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseBtn, Content, Overlay, TransactionType, TransactionTypeBtn } from "./styles";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
        <Overlay />
       
        <Content>
            <CloseBtn>
                <X size={24} />
            </CloseBtn>
            <Dialog.Title>
                New Transaction
            </Dialog.Title>
            <form action="">
                <input type="text" placeholder="Description" />
                <input type="number" placeholder="Price" />
                <input type="text" placeholder="Category" />

                <TransactionType>
                    <TransactionTypeBtn variant="income" value="income">
                       <ArrowCircleUp size={24}/>
                       In
                    </TransactionTypeBtn>
                    <TransactionTypeBtn variant="outcome" value="outcome">
                       <ArrowCircleDown size={24}/>
                       Out
                    </TransactionTypeBtn>
                </TransactionType>

                <button type="submit">
                    Register
                </button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}