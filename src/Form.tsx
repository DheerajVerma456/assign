import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography, InputLabel } from '@mui/material';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Add form submission logic
    // Navigate to Data Grid page
    navigate('/datagrid');
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h3">
          Form for Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <InputLabel htmlFor="name">Name</InputLabel>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <InputLabel htmlFor="phone">Phone Number</InputLabel>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <InputLabel htmlFor="email">Email</InputLabel>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;