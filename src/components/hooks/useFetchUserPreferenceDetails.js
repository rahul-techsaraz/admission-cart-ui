import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserPreferenceDetails } from '../ReduxThunk/CommonThunk'
import constants from '../../utils/Constants/constants'

export const useFetchUserPreferenceDetails = () => {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.userSlice)

    const fetchPreferences = () => {
        dispatch(fetchUserPreferenceDetails({
            url: constants.apiEndPoint.USER_PREFERENCE_TO_VERIFY+userInfo.email,
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER,
        }))
    }
    return {fetchPreferences}
}
