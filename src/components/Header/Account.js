import React, {
  useRef,
  useState
} from 'react';

import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import { logout } from 'src/redux/actions/accountActions';

const useStyles = makeStyles((theme) => ({
  avatar1: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
    marginLeft: 24
  },
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1),
    marginLeft: 12
  },
  popover: {
    width: 150
  }
}));

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const ref = useRef(null);
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const { enqueueSnackbar } = useSnackbar();
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      handleClose();
      await dispatch(logout());
      history.push('/');
    } catch (error) {
      enqueueSnackbar('Unable to logout', {
        variant: 'error'
      });
    }
  };

  return (
    <>
      <Box
        className={classes.root}
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt="User"
          className={account.user ? classes.avatar : classes.avatar1}
        >
          {account.user ? account.user.name : ''}
        </Avatar>
        <Hidden smDown>
          <Typography
            variant="h6"
            color="inherit"
          >
            {account.user ? account.user.username : 'Tài khoản'}
          </Typography>
        </Hidden>
      </Box>
      {account.user ? (
        <Menu
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          keepMounted
          PaperProps={{ className: classes.popover }}
          getContentAnchorEl={null}
          anchorEl={ref.current}
          open={isOpen}
        >
          <MenuItem
            onClick={handleClose}
            component={RouterLink}
          />
          <MenuItem>
            {account.user.username}
          </MenuItem>
          <MenuItem>
            $
            {' '}
            {account.user.money ? account.user.money : 0}
            {' '}
            VND
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            Đăng xuất
          </MenuItem>
        </Menu>
      ) : (
        <Menu />
      )}
    </>
  );
}

export default Account;
