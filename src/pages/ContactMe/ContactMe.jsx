import React, { useState, useEffect, lazy, Suspense } from 'react';
import Loader from '../../components/Loader/Loader';
import { getStoredData } from '../../json/fetchData';

// Lazy load components
const AllIntroTemplate = lazy(() => import('../../components/AllIntroTemplate/AllIntroTemplate'));
const ContactSection = lazy(() => import('../../components/AllComapanyContact/AllCompanyContact'));

const ContactMe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const stored = await getStoredData();
        setData(stored["5"]);
      } catch (error) {
        console.error("Failed to load contact data", error);
      }
    };

    loadData();
  }, []);

  if (!data) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <AllIntroTemplate title={data.Introsubtitle} image={data.Introimage} />
        <ContactSection
          office={data.offices}
          fields={data.contactFormFields}
          Api="https://aspwppl-backend.vercel.app/form"
        />
      </div>
    </Suspense>
  );
};

export default ContactMe;
