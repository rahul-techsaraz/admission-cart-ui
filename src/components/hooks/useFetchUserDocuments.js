import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserDocument } from '../ReduxThunk/CommonThunk'
import constants from '../../utils/Constants/constants'

export const useFetchUserDocuments = () => {
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state=>state.userSlice)

    const fetchDocument = () => {
        dispatch(fetchUserDocument({
            url: constants.apiEndPoint.USER_DOCUMENT_GET_ALL_DOCUMENT+userInfo?.email,
            method: constants.apiMethod.GET,
            header: constants.apiHeader.HEADER
        }))
    }
    return { fetchDocument }
}
