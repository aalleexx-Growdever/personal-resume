import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: 'lightBlue',
    borderRadius: '25px',
  },
  title: {
    width: '100%',
    height: '15%',
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    top: -20,
    padding: '1%',
  },
  text: {
    textAlign: 'left',
    textIndent: '3%',
    marginLeft: '5%',
    position: 'relative',
    top: -30,
    fontSize: 15,
  },
  subtitle: {
    marginLeft: '5%',
    position: 'relative',
    top: -30,
  },
}));

export default useStyles;
