import Friendlist from "components/FriendList/FriendList";
import Profile from "components/Profile/Profile";
import {PageTitle} from "components/PageTitle/PageTitle";
import Transaction from "components/Transaction/Transaction";
import {StatisticList} from "components/Statistic/StatisticList";
import data from "../../data.json"
import friends from "../../friends.json";
import transactions from "../../transaction.json"


export const App = () => {
     return (
         <div>
             <Profile></Profile>

             {/* <Statistic title = "Upload stats"  
            //  label={idt.label}
            // percentage = {idt.percentage}
            >   
            </Statistic> */}
            <section>
            <PageTitle text = "Upload stats" />
             <StatisticList 
              stats = {data}/>
              </section>
             <Friendlist
             friends = {friends}/>
             <Transaction
        items = {transactions}
             />
         </div>
     );
 }

