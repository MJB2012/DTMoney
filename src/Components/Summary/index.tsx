import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>
                        Income{"  "}
                        <ArrowCircleUp size={32} color="#00b37e"/>
                    </span>
                </header>
                <strong>$5.000</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>
                        Expenses{"  "}
                        <ArrowCircleDown size={32} color="#f75a68"/>
                    </span>
                </header>
                <strong>$2.000</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>
                        Balance{"  "}
                        <CurrencyDollar size={32} color="#fff"/>
                    </span>
                </header>
                <strong>$3.000</strong>
            </SummaryCard>

        </SummaryContainer>
    )
}