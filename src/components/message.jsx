import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const Message = ({ openMessage, setOpenMessage, messageText}) => {
    const handleCloseSnackbar = () => {
        setOpenMessage(false);
      };
    return (
        <Snackbar open={openMessage} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}>
          <Alert onClose={handleCloseSnackbar} severity="success">
              {messageText}
          </Alert>
        </Snackbar>
    )
}
export default Message