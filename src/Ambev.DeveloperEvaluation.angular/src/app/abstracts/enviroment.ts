export const Enviroment = {
    production: false,
    api: 'https://localhost:7181/api/',
    token: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxNWY0NTMwNC04ZGFmLTRhYTItYjgxNS1hMTk0OWNkMTdkMTAiLCJ1bmlxdWVfbmFtZSI6IndpbGxpbWFyIiwicm9sZSI6Ik1hbmFnZXIiLCJuYmYiOjE3NDIzNDM2ODMsImV4cCI6MTc0MjM3MjQ4MywiaWF0IjoxNzQyMzQzNjgzfQ.9oiegwWJ0zYNZhnUy9bqfkxxky8qgwdW_mEmHfLRIOI`,
    isAuthenticaded: () => {
        return Enviroment.token != ``;
    },
}