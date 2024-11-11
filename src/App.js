import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Container, Paper, IconButton } from '@mui/material';
import { Edit } from '@mui/icons-material';

const fetchRandomUser = async () => {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];
  return {
    name: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
  };
};

const AutoFillForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const fillForm = async () => {
    const randomData = await fetchRandomUser();
    setFormData(randomData);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Paper
        sx={{
          padding: 4,
          borderRadius: 4,
          boxShadow: 8,
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          Autofill Your Details
        </Typography>
        <form>
          <Box mb={3}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              sx={{
                borderRadius: 3,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
          </Box>
          <Box mb={3}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              sx={{
                borderRadius: 3,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
          </Box>
          <Box mb={4}>
            <TextField
              label="Phone"
              variant="outlined"
              fullWidth
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              sx={{
                borderRadius: 3,
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': { borderColor: '#1976d2' },
                },
              }}
            />
          </Box>
        </form>
      </Paper>

      {/* Floating Icon Button */}
      <IconButton
        onClick={fillForm}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#1976d2',
          color: 'white',
          boxShadow: 5,
          borderRadius: '50%',
          width: 60,
          height: 60,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            backgroundColor: '#1565c0',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
            transform: 'scale(1.1)',
          },
        }}
      >
        <Edit sx={{ fontSize: 30 }} />
      </IconButton>
    </Container>
  );
};

export default AutoFillForm;
