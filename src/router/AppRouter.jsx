import { Routes,Route,Navigate } from "react-router-dom"
import { LoginPage } from "../auth"
import { CalendarPage } from "../calendar"
import { useAuthStore } from "../hooks"
import { useEffect } from "react"
// import { getEnvVariables } from "../helpers";

export const AppRouter = () => {
  // console.log(getEnvVariables());
  // const authStatus='not-authenticated'
  const { checkAuthToken , status } = useAuthStore();
  
  useEffect(() => {
    checkAuthToken();
  },[])

  if (status==='checking') {
    return (
      <h3>Loading...</h3>
    )
  }


  return (
    <Routes>
      {
          (status==='not-authenticated')
          ? (<>
                <Route path="/auth/*" element={<LoginPage /> } />
                <Route path="/*" element={ <Navigate to={"/auth/login"} /> } />
            </>
          )
          : (
            <>
              <Route path="/" element={ <CalendarPage /> } />
              <Route path="/*" element={ <Navigate to={"/"} /> } />
            </>          
          )

      }
      
    </Routes>
  )
}
