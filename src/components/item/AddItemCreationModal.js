import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  //   border: '2px solid #000',

  boxShadow: 24,
  p: 2,
};



export default function BasicModal(props) {
  const[status, setStatus] = React.useState("true")
  const [itemName, setItemName] = React.useState("")
  const[itemCode,setItemCode] = React.useState("")
  
  const handleAddData = () => {
    let tempArr = [...props.tableData];
    let obj = {
      "Item Name": itemName,
      "Item Code": itemCode,
     Status: status,
    };
    tempArr.push(obj)
    console.log(tempArr);
    props.setTableData(tempArr)
    setItemName("")
    props.handleCloseModal()
  };
  return (
    < div >
    <Modal
      open={props.handleOpenModal}
      // 
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="rounded">
        <div className="flex justify-between">
          <h1>Item Creation</h1>
          <button type="button" className="border border-red-600 text-red-600 rounded"
            onClick={props.handleCloseModal}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex space-x-2 mt-4">
        {/* <TextField fullWidth size="small" label="Actions" onChange={(e) => { setStatus(e.target.value) }} /> */}
          <TextField fullWidth size="small" label="Item Name" onChange={(e) => { setItemName(e.target.value) }} />
          <TextField fullWidth size="small" label="Item Code" onChange={(e)=> {setItemCode(e.target.value)}} />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Active" />
        </div>
        <div className="mt-1 text-end">
          <button className="bg-green-600 text-white rounded p-2" onClick={handleAddData}>
            Save
          </button>
        </div>
      </Box>
    </Modal>
  </div >
  );
}