/* eslint-disable no-useless-escape */
export const checkIsEmail = (email) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g //expresion regular para validar email
    return emailRegex.test(email)
}