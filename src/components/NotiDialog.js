import React, {
  useEffect, useState
} from 'react';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';

import { SALE } from 'src/constants';
import 'src/style/NotiDialog.css';

const useStyles = makeStyles(() => ({
  noti_header: {
    color: 'red',
    textTransform: 'uppercase',
  },
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <div />
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function NotiDialog() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          className={classes.noti_header}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Thông báo
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {/* {(voucher !== 'null')
            ? (
              <Typography gutterBottom style={{ display: 'none' }}>
                <i className="far fa-hand-point-right" />
                {' '}
                Rất tiếc bạn không nhận được voucher
              </Typography>
            )
            : (
              <Typography gutterBottom>
                <i className="far fa-hand-point-right" />
                {' '}
                Chúc mừng bạn nhận được voucher trị giá
                {' '}
                <b style={{ color: 'red' }}>
                  {voucher.discount}
                  {' '}
                  % -
                  {' '}
                  {voucher.name}
                </b>
              </Typography>
            )} */}

          {SALE.sale !== 1 && (
          <Typography gutterBottom>
            <i className="far fa-hand-point-right">
              <b style={{ color: 'red', lineHeight: '1.3rem' }}>
                {' '}
                THÔNG BÁO: Từ ngày 07/11 - 08/11 giảm giá tất cả các tool 25% trên hệ thống web
                {' '}
                <b>Dungpham.com.vn</b>
                {' '}
                (trừ AutoPro_DP 206)
              </b>
              {' '}
            </i>
          </Typography>
          )}

          <a href="https://rongthanonline.vn/download" style={{ textDecoration: 'none', color: 'red' }}>
            <Typography gutterBottom>
              <i className="far fa-hand-point-right">
                <b style={{ color: 'red' }}>
                  {' '}
                  <b>Rồng thần online - Game nhập vai ngọc rồng cực đỉnh</b>
                  {' '}
                </b>
              </i>
              {' '}
              <b style={{ color: 'red!important' }}>
                [TẢI NGAY]
              </b>
            </Typography>
          </a>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right">
              <b style={{ color: 'red' }}>
                {' '}
                Lưu ý khi mua tool trên
                {' '}
                <b>Dungpham.com.vn</b>
              </b>
              {' '}
            </i>
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Chỉ bán tool hạn sử dụng vĩnh viễn, không bán theo tháng
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Không bán tool dành cho điện thoại, chỉ bán cho người dùng trên máy tính, laptop, vps
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Tất cả các tool đều có thể chạy trên vps
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Hỗ trợ đổi key miễn phí qua lại giữa máy tính, laptop và vps
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Mọi hành động mua bán chuyện nhượng tool đều bị band mọi key tool đã mua
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Hỗ trợ bảo hành trọn đời, sẽ bảo hành hết sức khi bị admin của game fix tool
            (thường có bản update sau 24h khi bị admin fix)
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Mua tool inbox vào thẳng vấn đề với facebook
            {' '}
            <b><a href="https://www.facebook.com/pham.dung177" style={{ textDecoration: 'none', color: 'red', opacity: 0.9 }}>Dũng Phạm</a></b>
            {' '}
            -
            {' '}
            https://www.facebook.com/pham.dung177 (Có thế copy link hoặc nhấn trực tiếp vào chữ
            {' '}
            <b><a href="https://www.facebook.com/pham.dung177" style={{ textDecoration: 'none', color: 'red', opacity: 0.9 }}>Dũng Phạm</a></b>
            )
          </Typography>

          <Typography gutterBottom>
            <i className="far fa-hand-point-right" />
            {' '}
            Thời gian làm việc 9h sáng - 24h hàng ngày
          </Typography>
          <Typography gutterBottom>
            <i className="fas fa-heart" />
            <i className="fas fa-heart" />
            <i className="fas fa-heart" />
            {' '}
            Chúc anh em lướt web vui vẻ!!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            OK
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

// NotiDialog.propTypes = {
//   voucher: PropTypes.any
// };

export default NotiDialog;
