import { makeStyles } from '@material-ui/core/styles';
import bg from '../../details/images/contact.jpg';

const useStyles = makeStyles((theme) => ({
  bg: {
    position: 'fixed',
    height: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    opacity: '100%',
  },
  main: {
    position: 'relative',
    top: 0,
    right: 150,
    height: '70vh',
    padding: '1%',
    backgroundColor: '#A4A0A0',
    borderRadius: '15px',
  },
  btnBack: {
    borderRadius: '50%',
    color: 'lightBlue',
    marginBottom: '2%',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
  },
  formInput: {
    width: '100%',
    marginBottom: '25px',
    color: 'primary',
  },
  btn: {
    color: 'lightBlue',
  },
  box: {
    marginLeft: '10%',
    marginBottom: '2%',
    borderRadius: '15px',
  },
}));

export default useStyles;
