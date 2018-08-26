import authReducer from "../../reducers/auth";

test('should set uid for login state', () => {
  const uid = '123456';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout state', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({uid: 'abcdef1234'}, action);
  expect(state.uid).toBe(undefined);
});