import React, {
  useCallback, useEffect, useRef, useState
} from 'react';

import { Container, Grid } from '@mui/material';
import { useSnackbar } from 'notistack';

import CardInItem from 'src/components/CardTool/CardInItem';
import Footer from 'src/components/Footer';
import GoogleAd from 'src/components/GoogleAd';
import LoadingAni from 'src/components/LoadingAni';
import LoadingAniMobile from 'src/components/LoadingAniMobile';
import Page from 'src/components/Page';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
import axios from 'src/utils/axios';

import 'src/style/HomeContent.css';
import 'src/style/AllToolView.css';

function AllToolView() {
  const [tools, setTools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const match = window.matchMedia('(min-width: 801px)').matches;

  const isMountedRef = useIsMountedRef();
  const toolRef = useRef(tools);
  const { enqueueSnackbar } = useSnackbar();

  const getTools = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/api/products/getall`);
      if (isMountedRef.current) {
        toolRef.current = response.data.data;
        setTools(response.data.data);
      }
    } catch (err) {
      enqueueSnackbar(err.response.status, { variant: 'error' });
    }
    setIsLoading(false);
  }, [isMountedRef]);

  useEffect(() => {
    getTools();
  }, [getTools]);

  return (
    <Page title="Tool | Tất cả sản phẩm ">
      <div className="allTool_root">
        <Container maxWidth="xl">
          <div className="container--ads">
            <GoogleAd slot="1168511780" />
            <GoogleAd slot="6995553534" />
          </div>
          <div className="allTool-title">
            <div className="aTool-container-title">
              <div className="box-allTool">
                <h1>
                  Tool
                </h1>
              </div>
              <div className="allTool-gradient-border" />
            </div>
          </div>
          <Grid className={!isLoading ? 'Pr1__body' : 'Pr1_body_mobile'}>
            {!isLoading && tools.map((tool) => (
              <CardInItem
                key={tool.id}
                tool={tool}
              />
            ))}
            {isLoading && match && <LoadingAni />}
            {isLoading && !match && <LoadingAniMobile />}
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

export default AllToolView;
