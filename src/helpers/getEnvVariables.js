export const getEnvVariables = () => {

  const apiURL=import.meta.env.VITE_API_URL;
  
  return {
      apiURL
  }
}

export default getEnvVariables