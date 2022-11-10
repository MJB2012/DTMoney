import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseBtn, Content, Overlay } from "./styles";

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

                <button type="submit">
                    Register
                </button>
            </form>
            
        </Content>
    </Dialog.Portal>
    )
}