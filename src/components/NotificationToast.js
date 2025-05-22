import React, { useEffect } from 'react';
import '../css/notificationtoast.css';
import { CheckCircle, XCircle, AlertTriangle, Info, X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { hideNotification } from '../features/commonSlice';

const icons = {
  success: <CheckCircle className="toast-icon success" />,
  error: <XCircle className="toast-icon error" />,
  warning: <AlertTriangle className="toast-icon warning" />,
  info: <Info className="toast-icon info" />,
};

const NotificationToast = ({
  isOpen,
  notificationType = 'info',
  notificationMessage = '',
  autoClose = true,
  closeAfter = 3000,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    let timer;
    if (isOpen && autoClose) {
      timer = setTimeout(() => {
        dispatch(hideNotification());
      }, closeAfter);
    }
    return () => clearTimeout(timer);
  }, [isOpen, autoClose, closeAfter, dispatch]);

  return (
    <div className="toast-container show">
      <div className={`toast-content ${notificationType}`}>
        {icons[notificationType]}
        <div className="toast-message">{notificationMessage}</div>
        <button className="toast-close-btn" onClick={() => dispatch(hideNotification())}>
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default NotificationToast;
