import {Statistics} from './Statistic.styles';
// import data from "../../data.json"


function Statistic({ label, percentage}) {
    return (
        
        <Statistics>
      <span>{label}</span>
      <span>{percentage}%</span>
        </Statistics>
    )
};

export default Statistic;
