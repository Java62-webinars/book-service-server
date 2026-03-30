  let dbConnectionError = null;
export const setDbConnectionError = (error) => {
    dbConnectionError = error;
}
export const getDbConnectionError = () => dbConnectionError