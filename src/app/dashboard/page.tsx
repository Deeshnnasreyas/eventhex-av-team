import AssignSection from '@/components/AssignSection';
import DashboardLayout from '@/components/DashboardLayout';
import SessionsTable from '@/components/SessionsTable';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="pt-[37px]">
        <AssignSection />
        <SessionsTable />
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
