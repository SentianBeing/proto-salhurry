import React from 'react';
import PackagesPage, { metadata as packagesMetadata } from '@/app/packages/page';

export const metadata = {
  ...packagesMetadata,
  title: 'Digital Marketing Packages & Pricing | SalHurry',
};

export default function DigitalMarketingPackagesPage() {
  return <PackagesPage />;
}
