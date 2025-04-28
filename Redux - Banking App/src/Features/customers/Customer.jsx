import { useSelector } from 'react-redux';
function Customer() {
  const customer = useSelector((state) => state.customer);
  console.log(customer.fullName);
  
  const { fullName } = customer;

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
