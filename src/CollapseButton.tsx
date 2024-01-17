import React, { useState } from 'react';
import {
  Checkbox,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
} from '@mui/material';

import {ExpandMore} from '@mui/icons-material';
import {ExpandLess} from '@mui/icons-material';

interface DepartmentData {
  department: string;
  sub_departments?: string[];
}

const departmentsData: DepartmentData[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggleExpand = (department: string) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(department)
        ? prevExpanded.filter((item) => item !== department)
        : [...prevExpanded, department]
    );
  };

  const handleToggleSelect = (department: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(department)
        ? prevSelected.filter((item) => item !== department)
        : [...prevSelected, department]
    );
  };

  const renderDepartments = (departments: DepartmentData[]) => {
    return departments.map((department) => (
      <div key={department.department}>
        <ListItem button onClick={() => handleToggleExpand(department.department)}>
          <ListItemIcon>
            <IconButton onClick={() => handleToggleSelect(department.department)}>
              <Checkbox
                edge="start"
                checked={selected.includes(department.department)}
                tabIndex={-1}
                disableRipple
              />
            </IconButton>
          </ListItemIcon>
          <ListItemText primary={department.department} />
          {department.sub_departments &&
            (expanded.includes(department.department) ? <ExpandLess /> : <ExpandMore />)}
        </ListItem>
        {department.sub_departments && (
          <Collapse in={expanded.includes(department.department)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.sub_departments.map((subDepartment) => (
                <ListItem
                  key={subDepartment}
                  button
                  sx={{ pl: 4 }} // Adjust the padding to create indentation
                  onClick={() => handleToggleSelect(subDepartment)}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selected.includes(subDepartment)}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDepartment} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        )}
      </div>
    ));
  };

  return (
    <div>
      <Typography variant="h5">Department List</Typography>
      <List>{renderDepartments(departmentsData)}</List>
    </div>
  );
};

export default DepartmentList;
