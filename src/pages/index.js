import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Ruxandra Croitoru"
      description="Technical Writer Portfolio"
    >
      <main style={{ padding: '4rem 2rem' }}>
        
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          <h1>Technical Writer Portfolio</h1>

          <p style={{ fontSize: '1.2rem' }}>
            I design and write structured documentation for enterprise software,
            including API documentation, release notes, process workflows, and UX writing systems.
          </p>

          <div style={{ marginTop: '2rem' }}>
            <Link
              className="button button--primary button--lg"
              to="/docs/about/about-me"
            >
              View Portfolio
            </Link>
          </div>

          <hr style={{ margin: '3rem 0' }} />

          <h2>What I do</h2>

          <ul>
            <li>API Documentation (REST / system integrations)</li>
            <li>Release Notes & Change Communication</li>
            <li>Documentation Governance & Process Design</li>
            <li>UX Writing Systems</li>
          </ul>

        </div>
      </main>
    </Layout>
  );
}