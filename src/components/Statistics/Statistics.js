import React from "react";
import PropTypes from "prop-types";
import { Section, StatisticsTitle, StatisticsWrapper, StatisticsList, StatisticsItem } from '../style'

const Statistics = ({ stats }) => {
    return (
        <Section>
            <StatisticsWrapper>
                <StatisticsTitle>Upload stats</StatisticsTitle>
                <StatisticsList>
                    {stats.map(item => (
                        <StatisticsItem key={item.id}>
                            <span >{item.label}</span>
                            <span key={item.id}>{item.percentage}%</span>
                        </StatisticsItem>
                    ))}
                </StatisticsList>
            </StatisticsWrapper>
        </Section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
}

export default Statistics