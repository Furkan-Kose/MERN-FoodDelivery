import React, {PropsWithChildren, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { JwtPayload } from './types'


type ProtectedRouteProps = PropsWithChildren

const ProtectedRoute = ({children}: ProtectedRouteProps) => {

    const user = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') as string) : null;

    const decodedToken: JwtPayload | null = user ? jwtDecode(user.token) : null;
  
    const isAdmin = decodedToken?.isAdmin;

    const navigate = useNavigate()

    useEffect(() => {
        if (!isAdmin) {
            navigate('/login', {replace: true})
        }
    }, [user, isAdmin, navigate])

  return children
}

export default ProtectedRoute