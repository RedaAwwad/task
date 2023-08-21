const user = {
  actions: [],
  auth_token: 'b61136b7d6294e6defce45fcbcc1d679',
  avatar: 'https://sat7.faulio.com/storage/../img/user.png',
  birthday: null,
  country: 0,
  country_state: 0,
  email: 'reda.awwad.eng@gmail.com',
  firstName: 'Reda',
  gender: 0,
  ignore_privacy: 0,
  lastName: 'Awwad',
  login: 'reda.awwad.eng@gmail.com',
  name: 'Reda Awwad',
  package: null,
  phone: null,
  registered: 1692613935,
  settings: [],
  unique_id: '00fab009c2661cb9aee6e7ad870067a7',
};

export default defineEventHandler(() => {
  return {
    data: user,
  };
});
