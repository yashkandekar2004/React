import { useSelector } from 'react-redux';


function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((state) => state.account);
  console.log(balance);
  
  return <div className="balance">{formatCurrency(balance.balance)}</div>;
}

export default BalanceDisplay;
