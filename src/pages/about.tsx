import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';

import Copyright from '@/components/Copyright';
import Layout from '@/components/Layout';
import Link from '@/components/Link';
import ProTip from '@/components/ProTip';

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>about us</title>
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            MUI v5 + Next.js with TypeScript example
          </Typography>
          <Box maxWidth='sm'>
            <Button variant='contained' component={Link} noLinkStyle href='/'>
              Go to the home page
            </Button>
          </Box>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
};

export default About;