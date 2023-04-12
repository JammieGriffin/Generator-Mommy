export const execSQL = async (promise) => {
  try {
    const [res, fields] = await promise;
    return [null, res, fields]
  } catch (error) {
    return [error]
  }
}