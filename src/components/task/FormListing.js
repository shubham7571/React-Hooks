import React, { useState } from 'react'
import { TextField } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import CheckBox from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    height: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
function  FormListing(Props) {
    const [tableData,setTableData]= useState([]);
    const [openFromCreationModel,setOpenCreationModel]=useState(false);
    const [confirmationModel,setfirmationModel]=useState();
    const [deleteIndex,setDeleteIndex]=useState(null);
    const[editRow,setEditRow]=useState(null);
    const handleCloseFromCreationModel=()=>setOpenCreationModel(false);
    console.log("DeleteIndex",deleteIndex);

    const dlelteRecord =() => {
        if(deleteIndex !==null){
            let newTemplateData = [... tableData];
            newTemplateData.splice (deleteIndex,1);
            setTableData(newTemplateData)
            setfirmationModel(false)
            setDeleteIndex(null)
        }
    };
    return (
        <div>
            <Modal
                open={Props.open}

                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"  >
                <Box sx={style}>
                    <div className='space-x-4 h-52   '>
                        <div className='flex justify-between'>
                            <div><h1 className='font-bold mb-6'>User</h1></div>
                            <div>
                                <button onClick={Props.handleclose}> <CancelIcon /></button>
                            </div>
                        </div>
                        <div className=' space-x-4 justify-between grid grid-cols-3 '>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    size='small'  >
                                    <MenuItem value={10}>Mr</MenuItem>
                                    <MenuItem value={20}> Miss</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label='FirstName'
                                size='small'
                            />
                            <TextField
                                label='Middle Name '
                                size='small'
                            />
                        </div>
                        <div className=' flex justify-between   mt-4 '>
                            <TextField
                                label=' last Name'
                                size='small'
                            />
                            <FormControl>
                                <RadioGroup row>
                                    <FormLabel id="demo-row-radio-buttons-group-label " className='mt-3  mr-2'>Gender : </FormLabel>
                                    <FormControlLabel value="female" control={<Radio />} label="Male" />
                                    <FormControlLabel value="male" control={<Radio />} label="Female" />
                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                label=' Mobile Number '
                                size='small'
                            />
                        </div>
                        <div className='mt-4 ' >
                            <TextField
                                label='Age '
                                size='small'
                            />
                            {/* <CheckBox inputprops={{"aria-label":"controlled"}}/>
                            Active */}
                            <Checkbox inputProps={{ 'aria-label': 'controlled' }} />
                            Active
                        </div>
                        <div className='flex justify-end '>
                            <button className='bg-blue-800 rounded text-white p-2 '  type='button'>SAVE</button>
                        </div>
                    </div>
                </Box>
            </Modal>

        </div>
    )
}

export default  FormListing