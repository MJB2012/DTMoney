import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar, CurrencyDollarSimple } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>
                        Income
                    </span>
                    <ArrowCircleUp size={32} color="#00b37e" />
                </header>
                <strong>$5.000</strong>
            </SummaryCard>
           
            <SummaryCard>
                <header>
                    <span>
                        Expenses
                    </span>
                    <ArrowCircleDown size={32} color="#f75a68" />
                </header>
                <strong>$2.000</strong>
            </SummaryCard>
          
            <SummaryCard variant="green">
                <header>
                    <span>
                        Balance
                    </span>
                    <CurrencyDollarSimple size={32} color="#fff" />
                </header>
                <strong>$3.000</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}