export async function loginHelper({ username, password }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}