/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import {
  Box,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { login } from 'src/redux/actions/accountActions';
import AppConfig from 'src/services/App.config';

const useStyles = makeStyles((theme) => ({
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    marginBottom: '125px',
    flexBasis: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      marginBottom: '0px',
    },
    color: '#cecccc'
  },
  logo: {
    fontSize: 130,
    color: '#cecccc'
  },
  Title: {
    color: 'white',
    fontWeight: '330',
    fontSize: 35
  },
}));

function LoginForm({ onSubmitSuccess, onSubmitFail, onCheckCaptcha }) {
  const classes = useStyles();
  const [isCheckCaptcha, setCheckCaptcha] = useState(false);

  const dispatch = useDispatch();

  const handleCheckCaptcha = () => {
    setCheckCaptcha(true);
  };

  // axios.post('https://server.dungpham.com.vn/api/users/login', {
  //   username: 'admin',
  //   password: 'admindzno1provip'
  // })
  //   .then(((response) => {
  //     console.log(response.data.data);
  //   }));

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Vui lòng nhập username';
        }

        if (!values.password) {
          errors.password = 'Vui lòng nhập mật khẩu';
        }

        return errors;
      }}
      onSubmit={async (values, {
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          if (isCheckCaptcha === true) {
            await dispatch(login(values.username, values.password));
            onSubmitSuccess();
          } else {
            onCheckCaptcha();
          }
        } catch (error) {
          const message = (error && error.data.message) || 'Something went wrong';
          onSubmitFail(error);
          setStatus({ success: false });
          setErrors({ submit: message });
          setSubmitting(false);
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          onSubmit={handleSubmit}
          className={classes.form}
        >
          <Box
            mt={-5}
            display="flex"
            justifyContent="center"
          >
            <AccountCircleRoundedIcon className={classes.logo} />
          </Box>
          <Box
            mt={1}
            mb={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography className={classes.Title}>
              Đăng nhập
            </Typography>
          </Box>
          <TextField
            name="username"
            type="username"
            fullWidth
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
            label="Username"
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="password"
            fullWidth
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            label="Mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="current-password"
          />
          <Box mt={2} />
          <Grid
            container
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
          >
            <Typography
              variant="h6"
              mb={2}
            >
              Xác thực
            </Typography>
            <ReCAPTCHA
              sitekey={AppConfig.GOOGLE.reCaptcha}
              onChange={handleCheckCaptcha}
            />
          </Grid>

          <Box mt={2} />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            fullWidth
          >
            Đăng nhập
          </Button>

          <Box mt={2}>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              <Link href="register">
                Bạn chưa có tài khoản?
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
}

LoginForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func,
  onCheckCaptcha: PropTypes.func
};

LoginForm.defaultProps = {
  onSubmitSuccess: () => {},
  onSubmitFail: () => {},
  onCheckCaptcha: () => {}
};

export default LoginForm;
