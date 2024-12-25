// import StatusLabel, { Status } from '@/app/components/status-label';
// import { headers } from 'next/headers';

// export default function Home() {
//   console.log(headers());
//   return (
//     <main>
//       <h1 className="text-xl">Home page {new Date().toTimeString()}</h1>
//       <StatusLabel status={Status.Active}>Active</StatusLabel>
//       <StatusLabel status={Status.NotActive}>NotActive</StatusLabel>
//       <StatusLabel status={Status.Pending}>Pending</StatusLabel>
//       <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
//     </main>
//   );
// }

import AddCompanyButton from '@/app/components/add-company-button';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <AddCompanyButton />
    </main>
  );
}
