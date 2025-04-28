const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/update":
      return {
        ...state,
        fullName: action.payload.fullName,
      };

    default:
      return state;
  }
}

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateCustomer(fullName) {
  return {
    type: "customer/update",
    payload: {
      fullName,
    },
  };
}
export { createCustomer, updateCustomer };