import  TransactionHistory  from "components/Transaction/TransactionHistory";


const Transaction = ({items}) => {
    return (
         <table>
<thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

             {items.map(item => (   
        <TransactionHistory
        key={item.id}
        type={item.type}
        amount={item.amount}
        currency={item.currency}
          />
          ))}
          </table>
    );
};

export default Transaction;
