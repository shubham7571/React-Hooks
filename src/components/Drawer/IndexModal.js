import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { TextField } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
};

function IndexModal({ handleClose, open }) {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div>
              <p className="absolute top-0 right-0 m-0">
                <button className="p-2 text-red-600">
                  <HighlightOffIcon className="w-6 h-6" />
                </button>
              </p>
              <div className='text-center'>
                <TextField
                  size='small'
                  placeholder='Enter valid Name....'
                  margin="normal"
                />
              </div>
            </div>
            <p className='my-4 text-center bottom-2  '>
              <button className='h- w-16 rounded text-white bg-green-400 text-center '>Save</button>

            </p>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default IndexModal