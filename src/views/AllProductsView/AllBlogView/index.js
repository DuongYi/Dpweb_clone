import React from 'react';

import { Container, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import 'src/style/HomeContent.css';
import 'src/style/AllBlogView.css';
import CardInfo from 'src/components/CardInfo';
import Footer from 'src/components/Footer';
import GoogleAd from 'src/components/GoogleAd';
import Page from 'src/components/Page';
import { DUMMY_BLOG } from 'src/constants';

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

function AllBlogView() {
  const classes = useStyles();

  return (
    <Page title="Tool | Tất cả sản phẩm ">
      <div className={classes.root}>
        <Container maxWidth="xl">
          <div className="container--ads">
            <GoogleAd slot="6995553534" />
            <GoogleAd slot="2202709083" />
          </div>
          <div className="allBlog-title">
            <div className="aBlog-container-title">
              <div className="box-allBlog">
                <h1>
                  Blog
                </h1>
              </div>
              <div className="allBlog-gradient-border" />
            </div>
          </div>
          <Grid className="Pr1__body">
            {DUMMY_BLOG.map((blog) => (
              <CardInfo key={blog.id} blog={blog} />
            ))}
          </Grid>
        </Container>
      </div>
      <div className="container--ads">
        <GoogleAd slot="7016530990" auto="autorelaxed" />
      </div>
      <Footer />
    </Page>
  );
}

export default AllBlogView;
