import React, { useEffect, useState } from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Select from "react-select";
import CancelIcon from "@mui/icons-material/Cancel";
import { Controller, useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewTask16 = () => {
  const schema = yup.object({
    country: yup.object().required("Country is required"),
    state: yup.object().required("State is required"),
    district: yup.object().required("District is required"),
    taluka:yup.object().required("Taluka is required"),
    cityName:yup.object().required("cityName is required"),
    pinCode:yup.number().required()
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { control, handleSubmit, reset, watch, formState: { errors },register } = useForm({
    resolver: yupResolver(schema)
  });
  const [tableData, setTableData] = useState();
  const [tableDataKey, setTableDataKey] = useState([]);
  const [country, setCountry] = useState();
  const [state, setState] = useState([]);
  const [district, setDistrict] = useState([]);
  const [taluka, setTaluka] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [cityCode, setCityCode] = useState([]);

  async function fetchData() {
    let data = await axios.get("http://192.168.0.149:7060/country/getcountry");
    console.log(data.data.result);
    setCountry(data.data.result);
  }

  let countryName = watch("country");
  let stateName = watch("state");
  let districtName = watch("district");
  let talukaName = watch("taluka");
  let pincode = watch("pinCode");

  async function postData() {
    let PostObj = {
      pinCode: pincode,
      city: {
        id: cityName.id,
        description: "string",
        taluka: {
          id: talukaName.id,
          description: "string",
          district: {
            id: districtName.id,
            description: "string",
            state: {
              id: stateName.id,
              description: "string",
              country: {
                id: countryName.id,
                description: "string",
                isDelete: true,
              },
            },
          },
        },
      },
    };


await axios.post("",PostObj).then((res)=>{console.log(res)})


  }
  
  useEffect(() => {
    if (countryName !== null) {
      axios
        .get(http://192.168.0.149:7060/States/getState/${countryName?.id})
        .then((response) => {
          console.log("state", response);
          setState(response.data);
        });
    }
  }, [countryName]);

  useEffect(() => {
    if (stateName !== null) {
      axios
        .get(http://192.168.0.149:7060/District/getDistrict/${stateName?.id})
        .then((response) => {
          console.log("district", response);
          setDistrict(response.data);
        });
    }
  }, [stateName]);

  useEffect(() => {
    if (districtName !== null) {
      axios
        .get(http://192.168.0.149:7060/taluka/getTaluka/${districtName?.id})
        .then((response) => {
          console.log("taluka", response);
          setTaluka(response.data);
        });
    }
  }, [districtName]);

  useEffect(() => {
    if (talukaName !== null) {
      axios
        .get(http://192.168.0.149:7060/taluka/getTaluka/${talukaName?.id})
        .then((response) => {
          console.log("cityName", response);
          setCityName(response.data);
        });
    }
  }, [talukaName]);

  useEffect(() => {
    fetchData();
  }, []);

  const onSubmit = (data) => {
    let tempArr = []
    tempArr.push(data)
    setTableData(tempArr);
    console.log("actualData", data);
    console.log("tableData", tableData);
    const title = [];
       title.push(Object.keys(data))
       console.log("keys",title)
       setTableDataKey(title)
       postData()
    reset();
  };

  function handleReset() {
    reset();
  }

   
  return (
    <>
      <div>
        <div className="flex justify-between">
          <div className="flex ">
            <div className="m-4 flex rounded-sm w-96 ">
              <TextField
                className="mx-2"
             
                size="small"
                fullWidth
              />
              <button className="bg-indigo-800 text-white px-4 rounded-xl mx-2">
                <SearchIcon />
              </button>
            </div>
          </div>
          <div>
            <button
              onClick={handleOpen}
              className="py-2 px-3 m-4 bg-indigo-800 text-white rounded-lg"
            >
              Add New
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
      {tableData != null
                ?  <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="bg-gray-200 ">
                <TableCell>Country</TableCell>
                <TableCell>State</TableCell>
                <TableCell>District</TableCell>
                <TableCell>Taluka</TableCell>
                <TableCell>CityName</TableCell>
                <TableCell>Action</TableCell>
                {/* {
                  tableDataKey.map((obj)=>{
                    return(
                      <TableCell className="mx-8">{obj}</TableCell>
                    )

                  })
                } */}
              </TableRow>
            </TableHead>
            <TableBody>
              { tableData.map((obj, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{obj.country.label}</TableCell>
                    <TableCell>{obj.state.label}</TableCell>
                    <TableCell>{obj.district.label}</TableCell>
                    <TableCell>{obj.taluka.label}</TableCell>
                    <TableCell>{obj.cityName.label}</TableCell>
                    <TableCell>{obj.active ? <p>Active</p> : <p>InActive</p>}</TableCell>
                  </TableRow>
                ))}
               
            </TableBody>
          </Table>
        </TableContainer> : ""}
      </div>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex justify-end ">
              <button className="text-red-600 mb-2 mt-[-18px]">
                <CancelIcon
                  onClick={handleClose}
                  style={{ fontSize: 30 }}
                />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="border-[.5px] border-black">
                <div className="grid grid-cols-4 gap-4 m-4 my-8  ">
                  <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                   
                        {...field}
                        placeholder="Select Country*"
                        options={
                          country != null
                            ? country.map((obj) => {
                              return obj;
                            })
                            : []
                        }
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: state.isFocused ? '#2684FF' : (errors.country ? 'red' : '#ccc'),
                          }),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="state"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select State*"
                        options={state}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: state.isFocused ? '#2684FF' : (errors.state ? 'red' : '#ccc'),
                          }),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="district"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select District*"
                        options={district}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: state.isFocused ? '#2684FF' : (errors.district ? 'red' : '#ccc'),
                          }),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="taluka"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="Select Taluka*"
                        options={taluka}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: state.isFocused ? '#2684FF' : (errors.taluka ? 'red' : '#ccc'),
                          }),
                        }}
                      />
                    )}
                  />
                  <Controller
                    name="cityName"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Select
                        {...field}
                        placeholder="City Name*"
                        options={cityName}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            borderColor: state.isFocused ? '#2684FF' : (errors.cityName ? 'red' : '#ccc'),
                          }),
                        }}
                      />
                    )}
                  />
               
                      <TextField size="small" {...register("pinCode")} placeholder="pincode" error={errors.pinCode} />
                 
                  <span className="mt-2">
                    <Controller
                      name="active"
                      control={control}
                      defaultValue={false}
                      render={({ field }) => (
                        <input type="checkbox" {...field} />
                      )}
                    />{" "}
                    Active
                  </span>
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={handleReset}
                      type="button"
                      className="text-red-600 border-[1px] border-red-600 w-20 rounded-md"
                    >
                      Reset
                    </button>
                    <button
                      type="submit"
                      className="bg-indigo-900 text-white w-20 rounded-md"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default NewTask16;