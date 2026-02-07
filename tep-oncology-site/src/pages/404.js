import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function NotFound() {
  return (
    <Layout title="Page introuvable" description="Cette page n'existe pas">
      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '50vh',
        padding: '2rem',
        textAlign: 'center',
      }}>
        <h1 style={{fontSize: '4rem', marginBottom: '0.5rem'}}>404</h1>
        <p style={{fontSize: '1.5rem', marginBottom: '2rem'}}>
          Page introuvable — cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/docs/intro"
          className="button button--primary button--lg">
          Retour à l'accueil
        </Link>
      </main>
    </Layout>
  );
}
