import React, { useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function ChildComponent(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 850,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    middleName: yup.string().required("Please enter your middle name"),
    lastName: yup.string().required("Please enter your last name"),
    address: yup.string().required("Please enter your address"),
  });

  const {
    reset,
    setValue,
    formState: { errors },
    handleSubmit,
    register
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    let tempArr = [...props.tableData];
    if (props.selectedRow !== null) {
      const index = tempArr.findIndex((row) => row === props.selectedRow);
      if (index !== -1) {
        tempArr[index] = data;
        props.setTableData(tempArr);
      }
      props.setSelectedRow(null)
    } else {
      tempArr.push(data);
      props.setTableData(tempArr);
    }
    props.handleClose();
    reset();
  };

  useEffect(() => {
    if (props.selectedRow !== null) {
      setValue('firstName', props.selectedRow.firstName || '');
      setValue('middleName', props.selectedRow.middleName || '');
      setValue('lastName', props.selectedRow.lastName || '');
      setValue('address', props.selectedRow.address || '');
    } else {
      reset();
    }
  }, [props.selectedRow]);

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='text-end' onClick={props.handleClose}>
              <Button variant='contained' type='button'>Close</Button>
            </div>
            <div className="my-20 text-center justify-center flex space-x-2">
              <div>
                <TextField
                  error={!!errors?.firstName}
                  helperText={errors?.firstName?.message}
                  label="First Name"
                  size="small"
                  name="firstName"
                  {...register("firstName")}
                />
              </div>
              <TextField
                label="Middle Name"
                size="small"
                name="middleName"
                helperText={errors?.middleName?.message}
                error={!!errors?.middleName}
                {...register("middleName")}
              />
              <div>
                <TextField
                  label="Last Name"
                  error={!!errors?.lastName}
                  helperText={errors?.lastName?.message}
                  size="small"
                  {...register("lastName")}
                  name="lastName"
                />
              </div>
              <div>
                <TextField
                  label="Address"
                  error={!!errors?.address}
                  helperText={errors?.address?.message}
                  size="small"
                  name="address"
                  {...register("address")}
                />
              </div>
              <Button className='h-10 w-10' variant="contained" size="small" type="submit">
                {props.selectedRow ? 'update' : 'Add'}
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ChildComponent;
