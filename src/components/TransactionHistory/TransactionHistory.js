import React from "react";
import { Section } from '../style'
import { Wrapper, Table, Thead, Tr, Th, Td, Tbody } from './TransactionHistory.styled'

const TransactionHistory = ({ items }) => {
    return (
        <Section>
            <Wrapper>
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Type</Th>
                            <Th>Amount</Th>
                            <Th>Currency</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {items.map(item => (
                            <Tr key={item.id}>
                                <Td>{item.type}</Td>
                                <Td>{item.amount}</Td>
                                <Td>{item.currency}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Wrapper>
        </Section>
    )
}

export default TransactionHistory