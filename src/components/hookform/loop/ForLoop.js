
import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
    // default values means starting value
    const defaultValues = {
        firstName: "",
        lastName: "",
        Age: 0,
    };

    const { register, watch, setValue, handleSubmit, reset } = useForm({
        defaultValues: defaultValues,
        mode: "onChange",
    });

    const [tableData, setTableData] = React.useState([]); 
    //use for table head 
    const [tableHeaders, setTableHeaders] = React.useState([]);

    const onSubmit = (data) => {
        console.log("data from the form is :", data);
        let dataArray = [...tableData];
        let tableObject = {
            "First Name": data?.firstName,   //backendkey :parameter ?. frontendkey
            "Last Name": data?.lastName,
            Age: data?.Age,
        };
        dataArray.push(tableObject);
        setTableData(dataArray);
        reset(defaultValues);
        // setValue(["firstName","lastName","Age"])
        // setValue("firstName", "");
    };

    function test(a) {
        return 2 * a;
    }

    console.log("function call", test(3));

    let object = {
        a: "1",
        b: "2",
        c: "3",
    };

    // console.log("object", Object.keys(object));   // find the only  key name  output is a,b,c
    // console.log("object1", Object.values(object));    // find the only values output is 1,2,3

    console.log("value of object by key", object["a"]); 

    React.useEffect(() => {
        if (tableData?.length > 0) {
            let headers = Object.keys(tableData[0]);
            setTableHeaders(headers);
        }
    }, [tableData]);

    //################    Loops    ####################
    let demoArray = [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                },
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets",
            },
        },
        {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            email: "Shanna@melissa.tv",
            address: {
                street: "Victor Plains",
                suite: "Suite 879",
                city: "Wisokyburgh",
                zipcode: "90566-7771",
                geo: {
                    lat: "-43.9509",
                    lng: "-34.4618",
                },
            },
            phone: "010-692-6593 x09125",
            website: "anastasia.net",
            company: {
                name: "Deckow-Crist",
                catchPhrase: "Proactive didactic contingency",
                bs: "synergize scalable supply-chains",
            },
        },
        {
            id: 3,
            name: "Clementine Bauch",
            username: "Samantha",
            email: "Nathan@yesenia.net",
            address: {
                street: "Douglas Extension",
                suite: "Suite 847",
                city: "McKenziehaven",
                zipcode: "59590-4157",
                geo: {
                    lat: "-68.6102",
                    lng: "-47.0653",
                },
            },
            phone: "1-463-123-4447",
            website: "ramiro.info",
            company: {
                name: "Romaguera-Jacobson",
                catchPhrase: "Face to face bifurcated interface",
                bs: "e-enable strategic applications",
            },
        },
        {
            id: 4,
            name: "Patricia Lebsack",
            username: "Karianne",
            email: "Julianne.OConner@kory.org",
            address: {
                street: "Hoeger Mall",
                suite: "Apt. 692",
                city: "South Elvis",
                zipcode: "53919-4257",
                geo: {
                    lat: "29.4572",
                    lng: "-164.2990",
                },
            },
            phone: "493-170-9623 x156",
            website: "kale.biz",
            company: {
                name: "Robel-Corkery",
                catchPhrase: "Multi-tiered zero tolerance productivity",
                bs: "transition cutting-edge web services",
            },
        },
    ];

    let arr = [
        {
            a: 1,
        },
        {
            a: 2,
        },
        {
            a: 4,
        },
    ];

    React.useEffect(() => {


        // this  simple for loop use for specific object add the key and values
        for (let i = 0; i <= arr?.length; i++) {
            console.log("what is i", i);
            if (i === 2) {
                arr[i].b = 4;
                console.log("22222222", arr);
            }
        }

        //for of use for  all objects add in the keys and values
        for (let object of arr) {
            object.b = 4;
            // console.log("what is i",i);
            console.log("1111111", arr);
        }

        // 
        // demoArray.forEach((item, index) => {
        //   // console.log("what is i",i);
        //   console.log("demoArray", object);
        // });
    }, [demoArray]);

    //################    Loops    ####################

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className="mt-10 font-semibold text-lg flex justify-center">
                React Hook From With Table.
            </label>
            <>
                <div className="grid grid-cols-4 items-center gap-2 px-[20%] my-5">
                    <div>
                        <input
                            autoComplete="off"
                            className="w-40 border border-gray-300 rounded h-9 px-3"
                            {...register("firstName")}
                            placeholder="First Name"
                        />
                    </div>
                    <div>
                        <input
                            autoComplete="off"
                            className="w-40 border border-gray-300 rounded h-9 px-3"
                            {...register("lastName")}
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <input
                            autoComplete="off"
                            className="w-40 border border-gray-300 rounded h-9 px-3"
                            {...register("Age")}
                            placeholder="Age"
                        />
                    </div>
                    <div>
                        <button
                            className=" rounded bg-green-700 p-3 text-white"
                            type="submit"
                        >
                            Add
                        </button>
                    </div>
                </div>
                <div className="my-4 px-[40%] ">
                    <table>
                        <thead>
                            <th>
                                {tableHeaders?.length > 0
                                    ? tableHeaders.map((header) => {
                                        <td className="px-5 w-32 border border-slate-600 whitespace-nowrap  text-black">
                                            {header}
                                        </td>;
                                    })
                                    : ""}
                            </th>
                        </thead>
                        <tbody>
                            {tableData?.length > 0
                                ? tableData.map((row) => {
                                    return (
                                        <td>
                                            {tableHeaders.map((header) => {
                                                return (
                                                    <td className="px-5 w-32 border border-slate-600 whitespace-nowrap  text-black">
                                                        {row[header]}
                                                    </td>
                                                );
                                            })}
                                        </td>
                                    );
                                })
                                : ""}
                        </tbody>
                    </table>
                </div>
            </>
        </form>
    );
}

export default ReactHookForm;

