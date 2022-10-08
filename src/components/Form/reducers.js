export const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE INPUT TEXT": {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    case "NOTIFICATION START":
      return {
        ...state,
        notificationSuccess: action.field,
        showNotification: true,
      };
    case "NOTIFICATION END":
      return { ...state, showNotification: false };
  }
};
