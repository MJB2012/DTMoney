import { useEffect } from "react";
import { Header } from "../../Components/Header";
import { Summary } from "../../Components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    useEffect(() => {
        fetch('http://localhost:3333/transactions')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
     }, [])
    
   
    
    return (
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
            
            <SearchForm />
            <TransactionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Website development</td>
                        <td>
                            <PriceHighlight variant="income">
                                $5.000
                            </PriceHighlight>
                        </td>
                        <td>Sale</td>
                        <td>11/20/2022</td>
                    </tr>
                    <tr>
                        <td width="50%">New Gaming PC</td>
                        <td>
                            <PriceHighlight variant="outcome">
                                -$3.000
                            </PriceHighlight>
                        </td>
                        <td>Personal Expenses</td>
                        <td>11/20/2022</td>
                    </tr>
                   
                </tbody>
            </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}