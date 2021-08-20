import { INCREMMENT, DECREMMENT, RESET } from "./action-type";

export const incrementHandler = (payload) => {
  return {
    type: INCREMMENT
  };
};

export const decrementHandler = () => {
  return {
    type: DECREMMENT
  };
};
export const resetHandler = () => {
  return {
    type: RESET
  };
};
