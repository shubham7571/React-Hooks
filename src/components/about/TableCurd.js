import React, { useEffect, useState } from 'react'
import Curd from './Curd';

function TableCurd() {

    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('0')
    const [id, setId] = useState('0')
    const [isUpdate,setIsUpdate]=useState(false)
    useEffect(() => {
        setData(Curd)
    }, []);

    const handleEdit = (id) => {
const dt=data.filter(item=> item.id ===id);
if(dt!==undefined)
{
    setIsUpdate(true)
    setId(id);
    setFirstName(dt[0].firstName);
    setLastName(dt[0].lastName);
    setAge(dt[0].age);

}
    }
    const handleDelete = (id) => {
        if (id > 0) {

            const dt = data.filter(item => item.id !== id);
        }
    }
    const handleSave = () => {

    }
    const handleUpdate = () => {

    }
    const handleClear = () => {

        setId(0);
        setFirstName('');
        setLastName('');
        setAge('');
    
    }
    }

    return (
        <div>
            <div className='flex justify-center my-10 '>
                <div>
                    <label>First Name :
                        <input type='text' placeholder='Enter Your First Name' onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
                    </label>
                </div>
                <div>
                    <label>Last Name :
                        <input type='text' placeholder='Enter Your Last Name' onChange={(e)=>setLastName(e.target.value)} value={lastName} />
                    </label>
                </div>
                <div>
                    <label> Age :
                        <input type='text' placeholder='Enter Your Age'  onChange={(e) => setAge(e.target.value)} value={age}/>
                    </label>
                </div>
                <div>
                    <button className='' onClick={() => handleSave()}> Save</button>
                    <button className='' onClick={() => handleUpdate()}>update</button>
                    <button onClick={() => handleClear()}> Clear</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <td>Sr.No</td>
                        <td>Id</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.id}</td>
                                    <td>{item.firstname}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button className='' onClick={() => handleEdit(item.id)}>Edit</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}

export default TableCurd