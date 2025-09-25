import Cookie from 'js-cookie';

export function getToken() {
  return Cookie.get('rsToken')!;
}

/**
 * cookie expires less than a day
 * expires: Date.now() + 15 * 60 * 1000 is 15 minutes
 * expires: 1/24 is 1 an hours
 * 
 * @param p property
 * @param token token
 */
export function setToken(token: string) {
  Cookie.set('rsToken', token, { expires: 1/12, secure: false, sameSite: 'Lax' });
}

export function removeToken() {
  Cookie.remove('rsToken');
}
