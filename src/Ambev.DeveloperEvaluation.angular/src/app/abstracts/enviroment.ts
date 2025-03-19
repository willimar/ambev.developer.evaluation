export const Enviroment = {
    production: false,
    api: 'https://localhost:7181/api/',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJhMWY2YmI3OS0wM2JhLTRiOWEtOWQxYi1hYWM2ODdlNjVhNjIiLCJ1bmlxdWVfbmFtZSI6IndpbGxpbWFyIiwicm9sZSI6Ik1hbmFnZXIiLCJuYmYiOjE3NDI0MDAxOTYsImV4cCI6MTc0MjQyODk5NiwiaWF0IjoxNzQyNDAwMTk2fQ.UdyH4ir3DEX5CedNEOptFvEJbrLRB-EkUOM4lqEddmE`,
    isAuthenticaded: () => {
        return Enviroment.token != ``;
    },
}