import { Button, FormControlLabel, Grid, Radio, RadioGroup, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import axios from 'axios';

const TextField = styled(TextValidator)(() => ({
  width: '100%',
  marginBottom: '16px',
}));

const MenuForm = (props) => {
  const [open, setOpen] = useState(false);

  const [data, setdata] = useState({
    title: '',
    price: '',
    category: '',
    url: '',
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
      if (value !== data.password) return false;

      return true;
    });
    return () => ValidatorForm.removeValidationRule('isPasswordMatch');
  }, [data.password]);

  const handleChange = (e) => {
    e.persist();
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // =========================================================================
  const [rows, setRows] = useState([]);
  const [edit, setEdit] = useState(-1);

  useEffect(() => {
    axios.get('https://foodapi-main.onrender.com/api/category').then((r) => {
      const d = r.data.map((value, index) => {
        value.id = index + 1;
        return value;
      });
      setRows(d);
      console.log(d);
    });
  }, [edit]);

  // =========================================================================
  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    // --------------------------API----------------------------
    axios.post('https://foodapi-main.onrender.com/api/menu', data).then((r) => {
      console.log('Registration successfully..');
      props.changeEdit(r.data._id);
    });

    setdata((e.target.value = ''));
    setOpen(props.handleClose);
  };

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} onError={() => null} autocomplete="off">
        <Grid container spacing={8}>
          <Grid item lg={12} md={12} sm={12} xs={12} sx={{ mt: 2 }}>
            <TextField
              type="text"
              name="title"
              id="standard-basic"
              value={data.title || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="name "
              validators={['required']}
            />
            <TextField
              type="number"
              name="price"
              id="standard-basic"
              value={data.price || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              label="price "
              validators={['required']}
            />

            <TextField
              select
              value={data.category || ''}
              variant="filled"
              onChange={handleChange}
              name="category"
              SelectProps={{
                native: 'true',
              }}
            >
              {rows.map((val) => {
                return (
                  <>
                    <option>{val.category}</option>
                  </>
                );
              })}
            </TextField>
            <TextField
              type="text"
              name="url"
              id="standard-basic"
              value={data.url || ''}
              onChange={handleChange}
              errorMessages={['this field is required']}
              validators={['required']}
            />
          </Grid>
        </Grid>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 mb-2">
              <Button
                color="error"
                variant="contained"
                type="submit"
                fullWidth
                onClick={() => {
                  setdata('');
                }}
              >
                <DeleteIcon />
                Clear
              </Button>
            </div>
            <div className="col-sm-6 mb-2">
              <Button color="primary" variant="contained" type="submit" fullWidth>
                <SendIcon />
                Add Item
              </Button>
            </div>
          </div>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default MenuForm;
