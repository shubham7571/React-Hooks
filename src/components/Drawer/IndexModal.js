import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { TextField, IconButton } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  middleName: yup.string().required('Middle Name is required'),
  lastName: yup.string().required('Last Name is required'),
  standard: yup.string().required('Standard is required'),
  rollNo: yup.number().typeError('Roll No must be a number').required('Roll No is required').min(0).max(100),
});

function IndexModal({ handleClose, open, tableData, setTableData }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    let updatedTableData = [...tableData, data];
    setTableData(updatedTableData);
    console.log("Submitted data:", data);
    reset();
    handleClose();
  };



  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <IconButton onClick={handleClose} style={{ position: 'absolute', color: 'red', top: 8, right: 8 }}>
            <HighlightOffIcon />
          </IconButton>
          <div className='text-center grid grid-cols-3 gap-4'>
            <TextField
              size='small'
              placeholder='Enter your First Name'
              margin="normal"
              fullWidth
              label="First Name"
              {...register("firstName")}
              error={!!errors.firstName}
            />
            <TextField
              size='small'
              placeholder='Enter your Middle Name'
              margin="normal"
              fullWidth
              label="Middle Name"
              {...register("middleName")}
              error={!!errors.middleName}
            />
            <TextField
              size='small'
              placeholder='Enter your Last Name'
              margin="normal"
              fullWidth
              label="Last Name"
              {...register("lastName")}
              error={!!errors.lastName}
            />
            <TextField
              size="small"
              placeholder="Enter your Standard"
              margin="normal"
              fullWidth
              label="Standard"
              {...register("standard")}
              error={!!errors.standard}
            />
            <TextField
              size='small'
              placeholder='Enter your Roll No'
              margin="normal"
              fullWidth
              label="Roll No"
              {...register("rollNo")}
              error={!!errors.rollNo}
            />
          </div>
          <p className='mt-4 text-right'>
            <button type='submit' className='h-10 w-16 rounded text-white bg-blue-500'>Save</button>
          </p>
        </form>
      </Box>
    </Modal>
  );
}

export default IndexModal;
