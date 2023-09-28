var store = undefined;

const storeProvider = {
  init(configureStore) {
    store = configureStore({});
  },
  getStore() {
    return store;
  },
  getCurrentState() {
    return store.getState();
  },
  getApi() {
    var currentState = this.getCurrentState();
    return currentState.config.api;
  },
  getCustomerType() {
    var currentState = this.getCurrentState();
    return currentState.config.customerType;
  },
  getSessionKey() {
    var currentState = this.getCurrentState();
    return currentState.config.sessionKey;
  },
  getAdminUserInfo() {
    var currentState = this.getCurrentState();
    var data = {
      name: currentState.user.name,
      email: currentState.user.emailId,
      phone: currentState.user.phone,
      token: currentState.user.token,
      role: currentState.user.role,
      userId: currentState.user.userId,
    };
    return data;
  },
};
export default storeProvider;
