import { useDebugValue } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import {updateLastLocation} from '../features/commonSlice'

const ProtectedRouter = ({children})=>{
    const dispatch = useDispatch()
    const{authenticateUser}= useSelector((state)=>state.common)
    let location = useLocation()
    // console.log(authenticateUser)
    if(!authenticateUser){
        dispatch((updateLastLocation({location})))
        return <Navigate to="/" state={{from:location}} replace/>
    }
    return children
}
export default ProtectedRouter