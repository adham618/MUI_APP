import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import Layout from '@/components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
    </Layout>
  );
};

export default Home;
