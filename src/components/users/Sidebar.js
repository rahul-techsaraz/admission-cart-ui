import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import constants from '../../utils/Constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { upDateActiveMenu } from '../../features/commonSlice';

export default function Sidebar() {
  const { openLoginModel, activemenue } = useSelector((state) => state.common);
  // console.log(activemenue)
  const dispatch = useDispatch();

  return (
    <>
      <div className="side-navbar-parents">
        <div className="side-navbar">
          <input type="checkbox" id="check" />
          <label for="check">
            <i className="fa-solid fa-bars-staggered" id="bars"></i>
            <i className="fa-solid fa-xmark" id="cancel"></i>
          </label>
          <ul>
            {constants.userDashBoardSidebarMenu.map((menuName, index) => (
              <li
                onClick={() => dispatch(upDateActiveMenu({ index: index == 0 ? index + 1 : index }))}
                className={index === activemenue ? 'active' : ''}
              >
                <Link to={`/user/dashboard${menuName.path}`}>
                  <span className={index === activemenue ? menuName.firstSpanClassName : ''}>
                    <i className={`fa-solid ${menuName.itagClassName}`}></i>
                  </span>{' '}
                  <span className={index === activemenue ? menuName.secondSpanClassName : ''}>
                    {menuName.lableName}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
