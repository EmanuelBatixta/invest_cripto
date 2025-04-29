export async function doLogin(email, password) {

    return new Promise((resolve, reject) => {
        if(email === 'emanuel@gmail.com' && password === '123456'){
            resolve(true)
        } else {
            reject('Email ou senha inválidos')
        }
    })
};