import React from 'react';

import {
  Grid,
  IconButton,
  ThemeProvider,
  makeStyles
} from '@material-ui/core';
import { ArrowBack as ArrowBackIcon } from '@material-ui/icons';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';

import Page from 'src/components/Page';
import theme from 'src/theme';

import RegisterForm from './RegisterForm';

const useStyles = makeStyles((theme1) => ({
  root: {
    height: '100%',
    backgroundColor: '#121212',
  },
  grid: {
    height: '100%'
  },
  bgWrapper: {
    [theme1.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  bg: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(https://source.unsplash.com/featured/?game)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    opacity: 0.5
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(5),
    paddingBototm: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },

  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  }
}));

function RegisterView() {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmitSuccess = () => {
    history.push('/');
  };

  const handleSubmitFail = (error) => {
    const errorMessage = error.data.message || 'Something went wrong';
    enqueueSnackbar(errorMessage, { variant: 'error' });
  };

  const handleCheckCaptcha = () => {
    const warningMessage = 'Tick Captcha đi cmm';
    enqueueSnackbar(warningMessage, { variant: 'warning' });
  };

  const handleBack = () => {
    history.push('/');
  };

  return (
    <ThemeProvider theme={theme}>
      <Page title="Dungpham.com.vn | Register" className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.bgWrapper} item lg={5}>
            <div className={classes.bg} />
          </Grid>
          <Grid className={classes.content} item lg={7} xs={12}>
            <div className={classes.contentHeader}>
              <IconButton
                className={classes.backButton}
                onClick={handleBack}
              >
                <ArrowBackIcon />
              </IconButton>
            </div>
            <div className={classes.contentBody}>
              <RegisterForm
                onSubmitSuccess={handleSubmitSuccess}
                onSubmitFail={handleSubmitFail}
                onCheckCaptcha={handleCheckCaptcha}
              />
            </div>
          </Grid>
        </Grid>
      </Page>
    </ThemeProvider>
  );
}

export default RegisterView;
