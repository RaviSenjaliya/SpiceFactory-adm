import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Label } from '@mui/icons-material';

const Master = () => {
  const myNav = useNavigate();

  const category = () => {
    myNav('/category');
  };
  const Table = () => {
    myNav('/Table');
  };

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Master
        </Typography>

        <div className="row">
          <div className="col-sm-4 mt-3 ">
            <Button color="primary" variant="contained" type="submit" onClick={category} fullWidth>
              Category
            </Button>
          </div>
          <div className="col-sm-4 mt-3">
            <Button color="primary" variant="contained" type="submit" onClick={Table} fullWidth>
              Table
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Master;
