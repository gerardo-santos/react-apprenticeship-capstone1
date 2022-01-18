import loginApi from '../utils/login.api';

describe('loginApi', () => {
  test('returns the mocked user when username and password are correct', () => {
    let username = 'wizeline';
    let password = 'Rocks!';
    return loginApi(username, password)
      .then((data) => expect(data).toHaveProperty('name'))
      .catch((err) =>
        expect(err.message).toStrictEqual('Username or password invalid')
      );
  });
});
