import React from 'react';

import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import CardInfo from 'src/components/CardInfo';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

import 'src/style/HomeContent.css';
import 'src/style/AllVPSView.css';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '85% 15%',
    background: '#161623',
    paddingTop: '15vh',
  },
}));

function AllToolView() {
  const classes = useStyles();

  return (
    <Page title="Tool | Tất cả sản phẩm ">
      <div className={classes.root}>
        <Container maxWidth="xl">
          <div className="allVPS-title">
            <div className="aVPS-container-title">
              <div className="box-allVPS">
                <h1>
                  VPS
                </h1>
              </div>
              <div className="allVPS-gradient-border" />
            </div>
          </div>
          <Grid className="Pr1__body">
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
          </Grid>
        </Container>
      </div>
      <Footer />
    </Page>
  );
}

export default AllToolView;
