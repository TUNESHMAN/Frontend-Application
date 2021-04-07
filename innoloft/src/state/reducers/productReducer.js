import {
  GET_PRODUCT,
  GET_TRL,
//   UPDATE_PRODUCT,
  GET_APP_CONFIGURATION,
  SET_ACTIVE_TAB,
} from "../types/types";

const product = {
  productDetails: {},
  trl: {},
  appConfiguration: {},
  activeTab: "description",
};

const productReducer = (state = product, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, productDetails: action.payload };
    case GET_TRL:
      return { ...state, trl: action.payload };
    case GET_APP_CONFIGURATION:
      return { ...state, appConfiguration: action.payload };
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

export default productReducer;
