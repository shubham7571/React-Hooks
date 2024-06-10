import React, { memo } from "react";
import { DummyData } from "./DummyData";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Switch } from 'antd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function NestedArrayMap() {
    const [dataArray, setDataArray] = React.useState(DummyData.subFunction);

    const handleParentChange = (e, index) => {
        e.stopPropagation(); // Prevent the accordion from closing
        let data = [...dataArray];
        data[index].isChecked = e.target.checked;

        if (data[index]?.subFunction) {
            data[index].subFunction = data[index].subFunction.map(sub => ({
                ...sub,
                isChecked: e.target.checked,
                permissions: sub.permissions?.map(permission => ({
                    ...permission,
                    isChecked: e.target.checked
                }))
            }));
        }

        setDataArray(data);
    };

    const handleChildChange = (e, parentIndex, childIndex) => {
        let data = [...dataArray];
        data[parentIndex].subFunction[childIndex].isChecked = e.target.checked;

        if (data[parentIndex].subFunction[childIndex]?.permissions) {
            data[parentIndex].subFunction[childIndex].permissions = data[parentIndex].subFunction[childIndex].permissions.map(permission =>
            ({
                ...permission,
                isChecked: e.target.checked
            }));
        }

        // Check if all child checkboxes are unchecked
        const allUnchecked = data[parentIndex].subFunction.every(child => !child.isChecked);
        data[parentIndex].isChecked = !allUnchecked;

        setDataArray(data);
    };

    const handlePermissionChange = (e, parentIndex, childIndex, permissionIndex) => {
        let data = [...dataArray];
        data[parentIndex].subFunction[childIndex].permissions[permissionIndex].isChecked = e.target.checked;

        // Check if all permission checkboxes are unchecked
        const allPermissionsUnchecked = data[parentIndex].subFunction[childIndex].permissions.every(permission => !permission.isChecked);
        data[parentIndex].subFunction[childIndex].isChecked = !allPermissionsUnchecked;

        // Check if all child checkboxes are checked
        const allChildrenChecked = data[parentIndex].subFunction.every(child => child.isChecked);
        data[parentIndex].isChecked = allChildrenChecked;

        // Check if all child checkboxes are unchecked
        const allChildrenUnchecked = data[parentIndex].subFunction.every(child => !child.isChecked);
        data[parentIndex].isChecked = !allChildrenUnchecked;

        setDataArray(data);
    };


    return (
        <>
            <div>
                {dataArray?.length > 0 &&
                    <div >
                        {dataArray.map((data, parentIndex) => (
                            <Accordion key={parentIndex}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${parentIndex}-content`}
                                        id={`panel${parentIndex}-header`}
                                    >
                                        <div className="flex  gap-4">
                                            <input
                                                type="checkbox"
                                                checked={data.isChecked}
                                                onChange={(e) => handleParentChange(e, parentIndex)}
                                            />
                                            <label className="tracking-wide font-serif font-semibold">
                                                {data.functionality}
                                            </label>
                                        </div>
                                    </AccordionSummary>
                                <AccordionDetails>
                                    <div className=" mx-20">
                                        {data.subFunction && data.subFunction.length > 0 &&
                                            data.subFunction.map((subFunctionData, childIndex) => (
                                                <div key={childIndex} className="my-2 gap-4">
                                                    <Accordion>
                                                        <AccordionSummary
                                                            expandIcon={<ArrowDropDownIcon />}
                                                            aria-controls="panel2-content"
                                                            id="panel2-header"
                                                        >
                                                            <div className="space-x-3  font-medium tracking-wide  font-serif">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={subFunctionData.isChecked}
                                                                    onChange={(e) => handleChildChange(e, parentIndex, childIndex)}
                                                                />
                                                                <label>{subFunctionData.functionality}</label>
                                                            </div>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <div className="grid grid-cols-3">
                                                                {
                                                                    subFunctionData?.permissions && subFunctionData.permissions.length > 0 &&
                                                                    subFunctionData.permissions.map((permissionData, permissionIndex) => (
                                                                        <div key={permissionIndex} className=" flex my-2 justify-between mr-16 ">
                                                                            <div className="space-x-3">
                                                                                <input
                                                                                    type="checkbox"
                                                                                    checked={permissionData.isChecked}
                                                                                    onChange={(e) => handlePermissionChange(e, parentIndex, childIndex, permissionIndex)}
                                                                                />
                                                                                <label>{permissionData.permission}</label>
                                                                            </div>
                                                                            <div>
                                                                                <Switch
                                                                                    checked={permissionData.isAction}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </div>

                                                        </AccordionDetails>
                                                    </Accordion>
                                                </div>

                                            ))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>

                        ))}
                    </div>
                }
            </div>
        </>
    );
}

export default memo(NestedArrayMap);
