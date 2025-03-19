export const Enviroment = {
    production: false,
    api: 'https://localhost:7181/api/',
    token: ``,
    isAuthenticaded: () => {
        return Enviroment.token != ``;
    },
}