import React from 'react';
import DataGridPage from './Grid';
import DepartmentList from './CollapseButton';

const MainPage: React.FC = () => {
  return (
    <div>
      <DataGridPage />
      <DepartmentList />
    </div>
  );
};

export default MainPage;
