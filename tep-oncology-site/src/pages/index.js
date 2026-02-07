import React from 'react';
import Head from '@docusaurus/Head';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Home() {
  const url = useBaseUrl('/docs/intro');
  return (
    <>
      <Head>
        <meta httpEquiv="refresh" content={`0;url=${url}`} />
      </Head>
      <Redirect to={url} />
    </>
  );
}
