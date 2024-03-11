import React from 'react'
import UserDashBoardBanner from './UserDashBoardBanner'
import DashBoardMainSection from './DashBoardMainSection'
import constants from '../../utils/Constants/constants'
import { Outlet } from 'react-router-dom'

export default function UserDashBoard() {
    return (
      <>
          <UserDashBoardBanner />
          <Outlet /> 
      </>
      
  )
}
