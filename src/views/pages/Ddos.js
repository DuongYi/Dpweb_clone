import React from 'react';

import {
  Box,
  Grid,
  Typography,
  makeStyles,
  useMediaQuery
} from '@material-ui/core';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

// import GoogleAd from 'src/components/GoogleAd';
import Page from 'src/components/Page';
import AppConfig from 'src/services/App.config';
import theme from 'src/theme';

import stylemodule from './Ddos.module.css';

const useStyles = makeStyles((theme1) => ({
  root: {
    height: '100vh',
    backgroundColor: '#121212',
    minHeight: '700px'
  },
  grid: {
    height: '100%',
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
    justifyContent: 'center',
    paddingTop: theme.spacing(10),
  },

  contentBody: {
    flexGrow: 1,
    display: 'flex',
    'felx-direction': 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },

  backButton: {
    color: '#fff'
  }
}));

function Ddos({ onCheckAuth }) {
  const classes = useStyles();
  const mobileDevice = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCheckCaptcha = () => {
    onCheckAuth();
  };

  return (
    <Page className={classes.root} title="DungPham.com.vn | Xác thực">
      <Grid className={classes.grid} container>
        {/* <Grid className={classes.bgWrapper} item lg={5}>
          <GoogleAd slot="989038934" classNames="page-top" />
          <GoogleAd slot="394738798" timeout={1000} classNames="page-bottom" />
        </Grid> */}
        <Grid className={classes.content} item lg={12} xs={12}>
          <div className={classes.contentHeader}>
            <div className={stylemodule.ddostitle}>
              <h1>
                Chào mừng đến với
                {' '}
                <br />
                {' '}
                <span>DUNGPHAM.COM.VN </span>
              </h1>
            </div>
          </div>
          <div className={classes.contentBody}>
            <Grid container direction="column">
              <Typography
                align="center"
                variant={mobileDevice ? 'h5' : 'h3'}
                style={{ color: '#fff' }}
              >
                Vui lòng check Captcha trước khi vào web
              </Typography>
              <Typography
                align="center"
                variant={mobileDevice ? 'h5' : 'h6'}
                style={{
                  color: '#fff',
                }}
              >
                Xin lỗi vì những bất tiện này!!
              </Typography>
              <Box mt={3} display="flex" justifyContent="center">
                <Grid
                  container
                  justifyContent="center"
                >
                  <ReCAPTCHA
                    sitekey={AppConfig.GOOGLE.reCaptcha}
                    onChange={handleCheckCaptcha}
                  />
                </Grid>
              </Box>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Page>
  );
}

Ddos.propTypes = {
  onCheckAuth: PropTypes.func,
};

Ddos.defaultProps = {
  onCheckAuth: () => {},
};

export default Ddos;
