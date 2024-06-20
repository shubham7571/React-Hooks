import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Common_Button from '../commonComponent/commonButton/Common_Button';
import IndexModal from './IndexModal';
import MuiTable from './MuiTable';

function Index() {
  const [indexModelOpen, setIndexModelOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  
  const handleOpen = () => setIndexModelOpen(true);
  const handleClose = () => setIndexModelOpen(false);

  // Define your header with correct keys
  const header = ['firstName', 'middleName', 'lastName', 'standard', 'rollNo'];

  return (
    <div>
      <div className='flex justify-between '>
        <TextField
          label="search field"
          size='small'
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <Common_Button
          label='Add Model '
          className='bg-blue-700 h-9 text-center w-28 rounded  text-white p-2'
          onClick={handleOpen}
        />
      </div>
      {indexModelOpen && (
        <IndexModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={indexModelOpen}
          tableData={tableData}
          setTableData={setTableData}
          header={header} // Pass header to IndexModal
        />
      )}
      <MuiTable tableData={tableData} header={header} />
    </div>
  );
}

export default Index;
