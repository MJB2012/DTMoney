import { ArrowCircleDown, ArrowCircleUp, CurrencyDollarSimple } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionContext";
import { useSummary } from "../../hooks/useSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    const summary = useSummary();
    
        return (
        
            <SummaryContainer>
                <SummaryCard>
                    <header>
                        <span>
                        Income
                        </span>
                        <ArrowCircleUp size={32} color="#00b37e" />
                    </header>
                    <strong>{ priceFormatter.format(summary.income) }</strong>
                </SummaryCard>
           
             <SummaryCard>
                    <header>
                        <span>
                            Expenses
                        </span>
                        <ArrowCircleDown size={32} color="#f75a68" />
                    </header>
                    <strong>{ priceFormatter.format(summary.outcome) }</strong>
                </SummaryCard>
          
             <SummaryCard variant="green">
                  <header>
                        <span>
                            Balance
                        </span>
                        <CurrencyDollarSimple size={32} color="#fff" />
                    </header>
                    <strong>{ priceFormatter.format(summary.total) }</strong>
                </SummaryCard>

            </SummaryContainer>
            )
        }