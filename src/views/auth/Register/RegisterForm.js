import React, { useState } from 'react';

import {
  Box,
  Button,
  Checkbox,
  Grid,
  Link,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';
import { useDispatch } from 'react-redux';

import { register } from 'src/redux/actions/accountActions';
import AppConfig from 'src/services/App.config';

const useStyles = makeStyles((theme) => ({
  form: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingTop: '50px',
    paddingBottom: '125px',
    flexBasis: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  Title: {
    color: 'white',
    fontWeight: '330',
    fontSize: 35,
    [theme.breakpoints.down('sm')]: {
      fontSize: 22
    }
  }
}));

function RegisterForm({ onSubmitSuccess, onSubmitFail, onCheckCaptcha }) {
  const classes = useStyles();
  const [isCheckCaptcha, setCheckCaptcha] = useState(false);

  const dispatch = useDispatch();

  const handleCheckCaptcha = () => {
    setCheckCaptcha(true);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        phoneNumber: '',
        email: '',
        password: '',
        password1: ''
      }}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = 'Vui lòng nhập Username';
        }

        if (!values.phoneNumber) {
          errors.phoneNumber = 'Vui lòng nhập số điện thoại';
        } else if (
          !/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/i.test(values.phoneNumber)
        ) {
          errors.phoneNumber = 'Vui lòng nhập đúng định dạng số điện thoại';
        }

        if (!values.email) {
          errors.email = 'Vui lòng nhập email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Vui lòng nhập đúng định dạng email';
        }

        if (!values.password) {
          errors.password = 'Vui lòng nhập mật khẩu';
        }

        if (!values.password1) {
          errors.password1 = 'Vui lòng nhập lại mật khẩu';
        }

        if (values.password && values.password1 && values.password !== values.password1) {
          errors.password1 = 'Mật khẩu không khớp';
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
            await dispatch(register(values));
            onSubmitSuccess();
          } else {
            onCheckCaptcha();
          }
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          onSubmitFail(error);
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
            mb={1.5}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              className={classes.Title}
              variant="h5"
              gutterBottom
            >
              Đăng kí tài khoản
            </Typography>
          </Box>
          <TextField
            fullWidth
            name="username"
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
            fullWidth
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.phoneNumber && errors.phoneNumber)}
            helperText={touched.phoneNumber && errors.phoneNumber}
            label="Số điện thoại"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            label="Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            label="Mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="new-password"
          />
          <TextField
            fullWidth
            name="password1"
            value={values.password1}
            onChange={handleChange}
            onBlur={handleBlur}
            error={Boolean(touched.password1 && errors.password1)}
            helperText={touched.password1 && errors.password1}
            label="Nhập lại mật khẩu"
            type="password"
            margin="normal"
            variant="outlined"
            autoComplete="new-password"
          />
          <Box mb={2} />
          <Grid
            container
            justifyContent="space-evenly"
            alignContent="center"
            alignItems="center"
          >
            <Typography
              variant="h6"
              mb={2}
              style={{ color: '#eee' }}
            >
              Xác thực
            </Typography>
            <ReCAPTCHA
              sitekey={AppConfig.GOOGLE.reCaptcha}
              onChange={handleCheckCaptcha}
            />
          </Grid>
          <Box mb={1}>
            <FormControlLabel
              style={{ color: '#ccc', marginTop: 4 }}
              control={(
                <Checkbox color="primary" />
              )}
              label="Tôi đồng ý với Điều khoản sử dụng của Dungpham.com.vn"
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disable={isSubmitting}
            fullWidth
          >
            Đăng kí
          </Button>
          <Box my={2} />
          <Box mt={2}>
            <Typography
              variant="body2"
              color="textSecondary"
            >
              <Link href="login">
                Bạn đã có tài khoản?
              </Link>
            </Typography>
          </Box>
        </form>
      )}
    </Formik>
  );
}

RegisterForm.propTypes = {
  onSubmitSuccess: PropTypes.func,
  onSubmitFail: PropTypes.func,
  onCheckCaptcha: PropTypes.func
};

RegisterForm.defaultProps = {
  onSubmitSuccess: () => {},
  onSubmitFail: () => {},
  onCheckCaptcha: () => {}
};

export default RegisterForm;
