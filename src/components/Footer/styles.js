import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    height: '10vh',
    backgroundColor: 'black',
  },
  link: {
    color: 'lightBlue',
    height: '70%',
    fontSize: 15,
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1%',
  },
}));

export default useStyles;
