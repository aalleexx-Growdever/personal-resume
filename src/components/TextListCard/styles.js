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
    marginLeft: '4%',
    fontSize: 17,
  },
}));

export default useStyles;
