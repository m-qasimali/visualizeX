import { Box, Stack, TextField, Button, useMediaQuery, Grid } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@emotion/react';
import { colorTokens } from '../../theme';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contactNumber: '',
  address1: '',
  address2: '',
};

const validationSchema = yup.object({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  contactNumber: yup
    .string()
    .matches(/^[0-9]{11}$/, 'Phone number must be 11 digits')
    .required('required'),
  address1: yup.string().required('required'),
  address2: yup.string().required('required'),
});

const handleSubmition = (values) => {
  console.log(values);
};

const Form = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const isSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const Input = ({
    id,
    label,
    value,
    handleChange,
    handleBlur,
    isTouched,
    error,
    type,
  }) => {
    return (
      <TextField
        id={id}
        label={label}
        variant='filled'
        name={id}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        helperText={isTouched && error}
        error={!!isTouched && !!error}
        fullWidth
        InputLabelProps={{ style: { color: colors.grey[100] } }}
        InputProps={{ style: { borderRadius: 0 } }}
        type={type}
      />
    );
  };

  return (
    <>
      <Stack
        py={2}
        px={2}
        spacing={1}
        sx={{ height: '100%', overflowY: 'scroll' }}
      >
        <Header title='Create user' subtitle='Create a New User Profile' />
        <Box
          sx={{
            width: '100%',
            pt: 3,
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmition}
          >
            {({
              handleSubmit,
              handleChange,
              touched,
              handleBlur,
              values,
              errors,
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ flexGrow: 1 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Input
                        id='firstName'
                        label='First Name'
                        value={values.firstName}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.firstName}
                        error={errors.firstName}
                        type='text'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        id='lastName'
                        label='Last Name'
                        value={values.lastName}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.lastName}
                        error={errors.lastName}
                        type='text'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        id='email'
                        label='Email'
                        value={values.email}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.email}
                        error={errors.email}
                        type='email'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Input
                        id='contactNumber'
                        label='Contact Number'
                        value={values.contactNumber}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.contactNumber}
                        error={errors.contactNumber}
                        type='string'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        id='address1'
                        label='Address 1'
                        value={values.contactNumber}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.address1}
                        error={errors.address1}
                        type='string'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Input
                        id='address2'
                        label='Address 2'
                        value={values.contactNumber}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        isTouched={touched.address2}
                        error={errors.address2}
                        type='string'
                      />
                    </Grid>
                  </Grid>
                </Box>
                <Stack direction={'row'} justifyContent={'flex-end'} mt={2}>
                  <Button
                    type='submit'
                    onClick={handleSubmit}
                    {...(isSM && { fullWidth: true })}
                    variant='contained'
                    size='large'
                    sx={{
                      backgroundColor: colors.greenAccent[700],
                      borderRadius: 0,
                      '&:hover': { backgroundColor: colors.greenAccent[600] },
                    }}
                  >
                    Create New User
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </>
  );
};

export default Form;
