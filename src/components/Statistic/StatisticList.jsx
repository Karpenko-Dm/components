import Statistic from "components/Statistic/Statistic";
import {List} from './StatisticList.styles';

export const StatisticList = ({stats}) => {
    return (
        <List >
            {stats.map(stat => (
                <Statistic
            key={stat.id}
            label={stat.label}
            percentage = {stat.percentage}
              />
            ))}
            
        </List>
    )
};
