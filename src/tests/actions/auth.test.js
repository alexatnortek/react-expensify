import { login, logout } from "../../actions/auth";

test('should generate login state action object', () => {
  const uid = '1234567';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout state action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});