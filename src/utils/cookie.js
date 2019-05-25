import Cookies from 'js-cookie'
const TokenKey = 'token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function setCookie(key, val) {
    return Cookies.set(key, val)
}
export function getCookie(key) {
    return Cookies.get(key)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}