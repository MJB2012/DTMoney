import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group"

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75) ;
`

export const Content = styled(Dialog.Content)`
    min-width: 32rem;;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme['gray-800']};

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type=number] {
            -moz-appearance: textfield;
        }

        input{
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1rem;
            font-family: 'Roboto Condensed', sans-serif;
            


            &::placeholder{
                color: ${props => props.theme['gray-500']}
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            font-weight: bold;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;
            font-family: 'Roboto Condensed', sans-serif;
            font-size: 1.3rem;

            &:hover {
                background: ${props => props.theme['green-700']};
                transition: background-color 0.1s;
            }
        }
    }
`;

export const CloseBtn = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    color: ${props => props.theme['gray-500']};
    font-size: 0;

`
export const TransactionType = styled(RadioGroup.Root)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-top: 0.5rem;
`;

interface TransactionBtnProps {
    variant: 'income'|'outcome';
}

export const TransactionTypeBtn = styled(RadioGroup.Item)<TransactionBtnProps>`
    background: ${props => props.theme['gray-700']};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    border: 0;
    color: ${props => props.theme['gray-300']};

    svg {
        color: ${props => props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
    }

    &[data-state = 'unchecked']{
        transition: background-color 0.1s;
        background: ${props => props.theme['gray-600']};
    }

    &[data-state='checked'] {
        color: ${props => props.theme.white};
        background: ${props => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

        svg {
            color: ${props => props.theme.white}
        }
    }
`;



