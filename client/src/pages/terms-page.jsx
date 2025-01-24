import React, { useEffect } from 'react'
import FeatureStore from '../store/FeatureStore';
import Layout from '../components/layout/layout';
import LegalContents from '../components/features/legal-contents';

const TermsPage = () => {
  const {LegalDetailsRequest}=FeatureStore();
  useEffect(() => {
      (async ()=>{
          await LegalDetailsRequest("terms")
      })()
  }, []);
  return (
      <Layout>
          <LegalContents/>
      </Layout>
  );
}

export default TermsPage