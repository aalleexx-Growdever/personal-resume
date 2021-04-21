import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '15vh',
    backgroundColor: 'black',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  avatar: {
    width: theme.spacing(16),
    height: theme.spacing(16),
    border: '2px solid white',
  },
  link: {
    color: 'lightBlue',
    padding: '2.5%',
    height: '90%',
    textDecoration: 'none',
    fontSize: 20,
  },
}));

export default useStyles;
