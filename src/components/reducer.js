const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  if (action.type === "INCREASE_AMOUNT") {
    let tempAmount = state.cart.map((item) => {
      return item.id === action.payload
        ? { ...item, amount: item.amount + 1 }
        : item;
    });
    return { ...state, cart: tempAmount };
  }

  if (action.type === "DECREASE_AMOUNT") {
    let tempAmount = state.cart
      .map((item) => {
        return item.id === action.payload
          ? { ...item, amount: item.amount - 1 }
          : item;
      })
      .filter((cartItem) => cartItem.amount !== 0);

    return { ...state, cart: tempAmount };
  }

  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.cart.reduce(
      (sum, { price, amount }) => {
        sum.amount += amount;
        sum.total += price * amount;

        return sum;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = +total.toFixed(2);
    return { ...state, amount, total };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  throw new Error("No matching type");
};

export default reducer;
