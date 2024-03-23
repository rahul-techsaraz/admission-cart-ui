import React, { useEffect } from 'react'
import UserDashBoardBanner from './UserDashBoardBanner'
import DashBoardMainSection from './DashBoardMainSection'
import constants from '../../utils/Constants/constants'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggelAfterLoginModel, toggelLoginModel, updateauthenticateUser } from '../../features/commonSlice'
import httpFetch from '../../fetch/useFetch'

export default function UserDashBoard() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const {authenticateUser, lastLocation} = useSelector((state)=>state.common)  
//   const authorise = async ()=>{
//     const custHeader = {...constants.apiHeader.HEADER, "Authorization" : JSON.parse(localStorage.getItem('loginResponse')).token}
//     const jsonData = await httpFetch(constants.apiEndPoint.USER_AUTHORISATION,constants.apiMethod.GET,custHeader)
//     if(jsonData.success == 0){
//         localStorage.removeItem('loginResponse')
//         dispatch(updateauthenticateUser({flag:false}))
//     }else{
//         dispatch(updateauthenticateUser({flag:true}))
//     }
// }
// useEffect(()=>{
// if(!localStorage.getItem("loginResponse")){
//     dispatch(toggelLoginModel({flag:true}))
//     dispatch(toggelAfterLoginModel({flag:false}))
//     dispatch(updateauthenticateUser({flag:false}))
// }else{
//     authorise()  
// }
// },[])
// useEffect(()=>{
//   if(!authenticateUser){
//       navigate('/')
//   }else{
//       navigate(lastLocation.pathname)
//   }
// },[authenticateUser])
  return (
      <>
          <UserDashBoardBanner />
          <Outlet /> 
      </>
      
  )
}
