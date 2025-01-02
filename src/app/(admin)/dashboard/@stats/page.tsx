import React from 'react';
import { getSummaryStats } from '@/lib/api';
import StatCard, { StatCardType } from '@/app/components/stat-card';
import Link from 'next/link';

export interface PageProps {}

const labelByStat = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

const Page = async () => {
  const data = await getSummaryStats();
  console.log(data); // Для отладки - уберите в продакшене

  return (
    <div className="grid grid-cols-12 gap-5">
      {Object.keys(data).map(key => (
        <Link href={`/dashboard/${key}`} key={key} className="col-span-3">
          <StatCard
            type={StatCardType.Gradient}
            label={labelByStat[key]}
            counter={data[key] || 0} // Значение по умолчанию, если не определено
          />
        </Link>
      ))}
    </div>
  );
};

export default Page;
