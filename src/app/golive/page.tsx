import React from 'react';

import DashboardLayout from '@/components/DashboardLayout';
import RecordHeader from '@/components/RecordHeader';
import RecordContent from '@/components/RecordContent';
const GoLivePage: React.FC = () => {
    return (
      <DashboardLayout>
        <div className="pt-4 lg:pt-[19px] px-4 lg:px-[67px]">
          <RecordHeader />
          <RecordContent />
        </div>
      </DashboardLayout>
    );
};

export default GoLivePage;
