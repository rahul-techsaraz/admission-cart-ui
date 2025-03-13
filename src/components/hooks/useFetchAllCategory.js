import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchSpecializationCategory } from '../ReduxThunk/CommonThunk'
import constants from '../../utils/Constants/constants'

export const useFetchAllCategory = () => {
  const dispatch = useDispatch()

  const fetchCategory = () => {
    dispatch(fetchSpecializationCategory({
        url: constants.apiEndPoint.CATEGORY_LIST,
        header: constants.apiHeader.HEADER,
        method: constants.apiMethod.GET
    }))
  }
  return {fetchCategory}
}
