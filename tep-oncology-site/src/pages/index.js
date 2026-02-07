import React from 'react';
import {Redirect} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Accueil" description="Formation et enseignement en imagerie TEP pour l'oncologie">
      <Redirect to={useBaseUrl('/docs/intro')} />
    </Layout>
  );
}
