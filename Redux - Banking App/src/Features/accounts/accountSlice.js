

const intialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
  };

export default function accountReducer(state = intialState, action) {
    switch (action.type) {
      case "account/deposit":
        return {
          ...state,
          balance: state.balance + action.payload,
        };
  
      case "account/withdraw":
        return {
          ...state,
          balance: state.balance - action.payload,
        };
      case "account/loan":
        if (state.loan > 0) {
          return state;
        }
        return {
          ...state,
          loan: state.loan + action.payload.amount,
          loanPurpose: action.payload.purpose,
          balance: state.balance + action.payload.amount,
        };
      case "account/payLoan":
        return {
          ...state,
          balance: state.balance - state.loan,
          loan: 0,
          loanPurpose: "",
        };
      default:
          return state;
    }
  }
 function deposit(amount) {
    return {
      type: "account/deposit",
      payload: amount,
    };
  }
  function withdraw(amount) {
    return {
      type: "account/withdraw",
      payload: amount,
    };
  }
  function loan(amount, purpose) {
    return {
      type: "account/loan",
      payload: { amount: amount, purpose: purpose },
    };
  }
  function payLoan() {
    return {
      type: "account/payLoan",
    };
  }
  export { deposit, withdraw, loan, payLoan };