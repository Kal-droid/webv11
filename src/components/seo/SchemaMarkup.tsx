import React from 'react';
import { generateOrganizationSchema, generateWebsiteSchema } from '../../utils/seo/schema';

export default function SchemaMarkup() {
  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(generateOrganizationSchema()) 
        }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(generateWebsiteSchema()) 
        }}
      />
    </>
  );
}