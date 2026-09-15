import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedRoute() {

 const isAuth = JSON.parse(localStorage.getItem("token"))

 if (!isAuth) {
  return <Navigate to="/SignInPage" replace/>
 }

  return <Outlet/>
}