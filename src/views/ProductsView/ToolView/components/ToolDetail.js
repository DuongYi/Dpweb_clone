import React, { useState } from 'react';

import {
  Box,
  Button,
  Dialog,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Skeleton from '@material-ui/lab/Skeleton';
import Rating from '@mui/material/Rating';
import PropTypes from 'prop-types';

import { SALE } from 'src/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '640px',
    minWidth: '360px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    color: '#fff',
  },
  blurRoot: {
    display: 'flex',
    alignItems: 'center',
    height: ' 100%',
    width: '100%',
    padding: theme.spacing(5),
    background:
      'linear-gradient(to right, rgba(0,0,0,.9) 32%, transparent 100%)',
    zIndex: 2,
  },
  toolName: {
    maxWidth: '75%',
    fontSize: '31px',
    lineHeight: 1.2,
    fontWeight: 390,
    paddingTop: '5px',
    display: 'flex',
  },
  updateDay: {
    color: '#00f5d3e0',
  },
  exp_date: {
    color: '#ff2626',
  },
  descriptionText: {
    color: '#cfd6e1',
    padding: theme.spacing(0, 0, 0, 0),
  },
  boxVer: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(0.4, 0.5, 0, 0.5),
    border: '1px solid rgba(255,255,255,0.2)',
  },
  version: {
    marginLeft: '10px',
    color: 'rgba(255,86,86,0.94)',
  },
  boxGenre: {
    marginBottom: theme.spacing(3),
  },
  genre: {
    padding: theme.spacing(0.85, 1.5, 0.3, 1.5),
    marginRight: theme.spacing(1),
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: 25,
  },
  price: {
    padding: theme.spacing(0.75, 1.5, 0.75, 1.5),
    border: '1px solid rgba(255,255,255,0.9)',
    borderRadius: 25,
  },
  notes: {
    color: 'yellow',
    opacity: 0.9,
    paddingBottom: theme.spacing(1.5),
  },
  devs: {
    color: '#4dadff',
  },
  dev__support: {
    color: '#b7b7b7',
    maxWidth: '80%',
    marginTop: theme.spacing(2),
    fontSize: 15
  },
  DungPham: {
    textDecoration: 'none',
    color: 'red',
    fontSize: 20,
    '&:hover': {
      textDecoration: 'underline',
    }
  },
  VSsYii: {
    textDecoration: 'none',
    color: 'red',
    fontSize: 18,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  container1: {
    marginTop: theme.spacing(1),
  },
  bt: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
  },
  btBook: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    padding: '10px 30px',
    fontSize: 12,
    backgroundColor: '#ff0000bd',
    color: '#fff',
    fontWeight: 'bold',
  },
  btDemo: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    marginLeft: 10,
    padding: '11.5px 56px',
    fontSize: 12,
    backgroundColor: '#ffffff40',
    color: '#fff',
    fontWeight: 'bold',
  },
  btDownload: {
    border: '1px solid rgba(255,255,255,0.13)',
    borderRadius: 0,
    marginLeft: 10,
    padding: '11.5px 45.7px',
    fontSize: 12,
    backgroundColor: '#ffffff40',
    color: '#fff',
    fontWeight: 'bold',
  },
  skeleton: {
    width: '400px',
  },
  vid_dialog: {
    background: '#000000b3',
    height: 'auto',
    width: ':auto',
    padding: '30px',
    color: '#fff'
  },
  [theme.breakpoints.down('sm')]: {
    blurRoot: {
      background:
        'linear-gradient(to right, rgba(0,0,0,.8) 50%, transparent 100%)',
    },
    price: {
      fontSize: 13.7,
    },
    rating: {
      marginTop: 4,
    },
    toolName: {
      maxWidth: '80%',
      fontSize: '25px',
    },
    descriptionText: {
      maxWidth: '80%',
      fontSize: '12px',
    },
    boxVer: {
      marginTop: theme.spacing(0.4),
    },
    notes: {
      fontSize: '15px'
    },
    devs: {
      fontSize: '15px',
    },
    dev__support: {
      fontSize: '13px',
      maxWidth: '90%'
    },
    VSsYii: {
      fontSize: 16
    },
    boxGenre: {
      marginBottom: theme.spacing(1),
    },
    genre: {
      padding: theme.spacing(0.19, 1.7),
      marginRight: theme.spacing(1),
      fontSize: 12,
    },
    container1: {
      marginTop: theme.spacing(2),
    },
    bt: {
      padding: theme.spacing(0),
    },
    btBook: {
      marginRight: 10,
      marginTop: 12,
      padding: '8px 20px',
      fontSize: 12,
    },
    btDemo: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.5px 46.6px',
      fontSize: 12,
    },
    btDownload: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.5px 35px',
      fontSize: 12,
    },
    skeleton: {
      width: '75vw',
      maxWidth: '340px',
    },
  },
  [theme.breakpoints.down('xs')]: {
    boxContent: {
      marginTop: theme.spacing(7),
    },
    price: {
      fontSize: 13,
    },
    boxVer: {
      marginTop: theme.spacing(0.1),
    },
    toolName: {
      maxWidth: '80%',
      fontSize: '20px',
    },
    notes: {
      fontSize: '12px',
    },
    btBook: {
      marginRight: 10,
      marginTop: 12,
      padding: '6px 20px',
      fontSize: 10.5,
    },
    btDemo: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.1px 46.6px',
      fontSize: 10.5,
    },
    btDownload: {
      marginLeft: 0,
      marginTop: 12,
      padding: '9.1px 35px',
      fontSize: 10.5,
    },
  },
}));

function getMoneys(money) {
  let result = '';
  let text = `${money}`;
  while (text.length > 3) {
    result = `.${text.substring(text.length - 3)}${result}`;
    text = text.substring(0, text.length - 3);
  }
  result = text + result;
  return result;
}

function ToolDetail({ tool }) {
  const desArr = tool.note.split('|');
  const classes = useStyles();
  const [trailerDialogOpen, setTrailerDialogOpen] = useState(false);

  return (
    <div
      className={classes.root}
      key={tool.id}
      style={{
        backgroundImage: 'url(https://img4.thuthuatphanmem.vn/uploads/2020/05/07/hinh-nen-dragon-ball-cuc-ky-dep_111004288.jpg)',
      }}
    >
      <div className={classes.blurRoot}>
        <div className={classes.boxContent}>
          <Box
            className={classes.boxGenre}
            display="flex"
            alignItems="center"
            flexWrap="wrap"
          >
            <Typography
              className={classes.genre}
              variant="body2"
              color="inherit"
            >
              <Rating
                name="read-only"
                className={classes.rating}
                value={5}
                size="small"
                readOnly
              />
            </Typography>
            {(tool.price)
              ? ([(SALE.sale === 1 || tool.name === 'AutoPro_DP 200')
                ? (
                  <Typography
                    className={classes.price}
                    variant="body2"
                    color="inherit"
                  >
                    {getMoneys(tool.price)}
                    {' '}
                    VND
                  </Typography>
                )
                : (
                  <Typography
                    className={classes.price}
                    variant="body2"
                    color="inherit"
                  >
                    {getMoneys(tool.price * SALE.sale)}
                    {' '}
                    VND
                  </Typography>
                )
              ])
              : (
                <Typography
                  className={classes.price}
                  variant="body2"
                  color="inherit"
                >
                  Miễn phí
                </Typography>
              )}
          </Box>

          <Typography
            className={classes.toolName}
            display="inline"
            align="center"
            variant="h5"
            color="inherit"
          >
            {!(tool && tool.name) ? (
              <Skeleton className={classes.skeleton} />
            ) : (
              tool.name
            )}

            <Typography className={classes.version} variant="caption">
              <div className={classes.boxVer}>
                Ver
                {' '}
                {!(tool && tool.version) ? (
                  <Skeleton width={60} height={20} />
                ) : (
                  tool.version
                )}
              </div>
            </Typography>
          </Typography>

          <Grid container className={classes.container1} alignItems="center">
            <Typography
              className={classes.exp_date}
              variant="body1"
            >
              Hạn sử dụng: vĩnh viễn
            </Typography>
          </Grid>
          <Typography className={classes.updateDay} variant="body1">
            Last update:
            {' '}
            {!(tool && tool.updatedDate) ? (
              <Skeleton width={60} height={30} />
            ) : (
              new Date(tool.updatedDate).toLocaleDateString('vi-VN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            )}
          </Typography>
          <Typography
            className={classes.descriptionText}
            variant="subtitle1"
            color="primary"
            paragraph
            style={{ paddingRight: 20, maxWidth: '100%' }}
          >
            {!(tool && tool.description) ? (
              <Skeleton
                variant="rect"
                className={classes.skeleton}
                height={80}
              />
            ) : (
              tool.description
            )}
          </Typography>

          <Typography
            className={classes.notes}
            variant="subtitle1"
            color="primary"
            style={{ paddingRight: 20 }}
          >
            {!(tool && tool.note && tool.note.length > 0) ? (
              <Skeleton
                variant="rect"
                style={{ maxWidth: '30%', height: '300px' }}
              />
            ) : (
              desArr.map((note) => (
                <span className="tool__note" key={note}>
                  <i className="far fa-hand-point-right" />
                  {' '}
                  {note}
                  {' '}
                  <br />
                </span>
              ))
            )}
          </Typography>

          <Typography
            className={classes.devs}
            variant="body1"
            color="secondary"
          >
            Programming & design by
            {' '}
            <a
              className={classes.DungPham}
              href="https://www.facebook.com/pham.dung177"
              target="_blank"
              rel="noreferrer"
            >
              Dũng Phạm
            </a>
          </Typography>
          {/* {!(tool.price)
            ? (
              <Typography
                className={classes.dev__support}
                variant="body1"
                color="secondary"
              >
                <i className="fas fa-headset" style={{ color: 'yellow', fontSize: 16 }} />
                {' '}
                Nếu có khó khăn trong quá trình tự cài đặt, có thể liên hệ ad
                {' '}
                <a
                  className={classes.VSsYii}
                  href="https://www.facebook.com/VSsYii193"
                  target="_blank"
                  rel="noreferrer"
                >
                  VSsYii
                </a>
                {' '}
                để được trợ giúp (Phí 50k ATM/Momo)
              </Typography>
            ) : <div style={{ display: 'none' }} />} */}

          <Grid container className={classes.bt}>
            <a
              href="https://www.facebook.com/pham.dung177"
              style={{ textDecoration: 'none' }}
              target="_blank"
              rel="noreferrer"
            >
              <Button className={classes.btBook}>
                Mua ngay
                <ShoppingCartIcon style={{ marginLeft: 8 }} />
              </Button>
            </a>
            {(tool.price)
              ? (
                <Button
                  className={classes.btDemo}
                  onClick={() => {
                    setTrailerDialogOpen(true);
                  }}
                >
                  Demo
                </Button>
              )
              : (
                <a
                  href={tool.link}
                  style={{ textDecoration: 'none' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    className={classes.btDownload}
                  >
                    Tải xuống
                  </Button>
                </a>
              )}
          </Grid>
        </div>
      </div>
      <Dialog
        open={trailerDialogOpen}
        onClose={() => {
          setTrailerDialogOpen(false);
        }}
      >
        {(tool.link) ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${tool.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <h1 style={{ padding: '2rem' }}>Tool/Mod này không có video demo</h1>
        )}
      </Dialog>
    </div>
  );
}

ToolDetail.propTypes = {
  tool: PropTypes.object,
};

export default ToolDetail;
