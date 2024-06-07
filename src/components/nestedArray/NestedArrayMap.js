import React from "react";
import { DummyData } from "./DummyData";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NestedArrayMap() {
    const [dataArray, setDataArray] = React.useState(DummyData.subFunction);

    // Fetch example (not directly related to the problem at hand)
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1", {
            responseType: "text/plain",
        })
            .then((response) => response.json())
            .then((res) => {
                console.log("promise result if fulfilled", res);
            })
            .catch((error) => {
                console.log("Error while fetching", error);
            });
    }, []);

    React.useEffect(() => {
        console.log("modified dataArray is :", dataArray);
    }, [dataArray]);

    const handleParentChange = (e, parentIndex) => {
        let data = [...dataArray];

        if (e.target.checked) {
            data[parentIndex].isChecked = true;

            // Checking all children if the parent is checked
            if (data[parentIndex].subFunction?.length > 0) {
                data[parentIndex].subFunction = data[parentIndex].subFunction.map(child => ({
                    ...child,
                    isChecked: true
                }));
            }
        } else {
            data[parentIndex].isChecked = false;

            // Unchecking all children if the parent is unchecked
            if (data[parentIndex].subFunction?.length > 0) {
                data[parentIndex].subFunction = data[parentIndex].subFunction.map(child => ({
                    ...child,
                    isChecked: false
                }));
            }
        }

        setDataArray(data);
    };

    const handleChildChange = (e, parentIndex, childIndex) => {
        let data = [...dataArray];
        data[parentIndex].subFunction[childIndex].isChecked = e.target.checked;

        // Update parent checkbox based on children state
        const allChildrenChecked = data[parentIndex].subFunction.every(child => child.isChecked);
        data[parentIndex].isChecked = allChildrenChecked;

        setDataArray(data);
    };

    return (
        <>
            <div>
                {dataArray?.length > 0 &&
                    <div>
                        {dataArray.map((data, parentIndex) => (
                            <Accordion key={parentIndex}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <div className="flex gap-4">
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
                                    <div className="grid grid-cols-5 gap-5 ml-20">
                                        {data.subFunction && data.subFunction.length > 0 &&
                                            data.subFunction.map((subFunctionData, childIndex) => (
                                                <div key={childIndex} className="flex gap-4">
                                                    <input
                                                        type="checkbox"
                                                        checked={subFunctionData.isChecked}
                                                        onChange={(e) => handleChildChange(e, parentIndex, childIndex)}
                                                    />
                                                    <label>{subFunctionData.functionality}</label>
                                                </div>
                                            ))}
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

export default NestedArrayMap;
