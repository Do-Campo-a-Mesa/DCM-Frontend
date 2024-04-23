import { Alert, Snackbar } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { notificationState } from '../../store/reducers/notification';

interface Props {
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'right' | 'left' | 'center';
  };
  severity: 'info' | 'error' | 'success' | 'warning';
  variant: 'standard' | 'filled' | 'outlined';
  visibility: boolean;
  message?: string;
  time?: number;
}

const Notification: React.FC<Props> = ({
  position = { vertical: 'top', horizontal: 'right' },
  severity = 'success',
  variant = 'standard',
  visibility = false,
  message,
  time = 3,
}) => {
  const dispatch = useDispatch();

  // Acessa o estado do usuário
  const notification = useSelector((state: RootState) => state.notification);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log('Message length:', message?.length);
    console.log('Visibility:', visibility);
    if (message?.length && visibility === true) {
      setOpen(true);
      dispatch(
        notificationState({
          variant: notification.variant,
          severity: notification.severity,
          message: notification.message,
          visibility: false,
        })
      );
    }
  }, [
    dispatch,
    message?.length,
    visibility,
    notification.message,
    notification.severity,
    notification.variant,
  ]);

  return (
    <Snackbar
      open={open}
      autoHideDuration={time * 1000}
      anchorOrigin={{
        vertical: position.vertical,
        horizontal: position.horizontal,
      }}
      onClose={(_event, reason) => {
        if (reason !== 'clickaway' && reason !== 'escapeKeyDown') {
          setOpen(false);
        }
      }}
    >
      <Alert variant={variant} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
