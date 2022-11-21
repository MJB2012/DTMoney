import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { CloseBtn, Content, Overlay, TransactionType, TransactionTypeBtn } from "./styles";
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../context/TransactionContext";
import { useContext } from "react";

const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome']),
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal() {
    const { createTransaction } = useContext(TransactionsContext)
    
    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset
    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })


    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
        const { description, price, category, type } = data;

        await createTransaction({
            description,
            price,
            category,
            type
        })
      
        reset();
    }

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
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>


                    <input
                        type="text"
                        placeholder="Description"
                        required
                        {...register('description')}
                    />

                    <input
                        type="number"
                        placeholder="Price"
                        required
                        {...register('price', { valueAsNumber: true })}
                    />
                  
                    <input
                        type="text"
                        placeholder="Category"
                        required
                        {...register('category')}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (

                                <TransactionType 
                                onValueChange={field.onChange} 
                                value={field.value}
                                >
                                    <TransactionTypeBtn variant="income" value="income">
                                        <ArrowCircleUp size={24} />
                                        In
                                    </TransactionTypeBtn>
                                    <TransactionTypeBtn variant="outcome" value="outcome">
                                        <ArrowCircleDown size={24} />
                                        Out
                                    </TransactionTypeBtn>
                                </TransactionType>
                            )
                        }}
                    />

                    <button type="submit" disabled={isSubmitting} >
                        Register
                    </button>
                </form>

            </Content>
        </Dialog.Portal>
    )
}