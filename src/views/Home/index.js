import React from 'react';

import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

import HomeContent from './components/HomeContent';
import TopBackground from './components/TopBackground';

function Home() {
  return (
    <>
      <Page title="Dungpham.com.vn | Uy tín, chất lượng, giá rẻ">
        <TopBackground />
        <HomeContent />
        <Footer />
      </Page>
    </>
  );
}

export default Home;
