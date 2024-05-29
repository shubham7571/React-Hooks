import React, { useEffect, useState } from 'react';
import Curd from './Curd';

function TableCurd() {
    const [data, setData] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('0');
    const [id, setId] = useState('0');
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        setData(Curd);
    }, []);

    const handleEdit = (id) => {
        const dt = data.find(item => item.id === id);
        if (dt) {
            setIsUpdate(true);
            setId(id);
            setFirstName(dt.firstName);
            setLastName(dt.lastName);
            setAge(dt.age);
        }
    }

    const handleDelete = (id) => {
        if (id > 0) {
            const dt = data.filter(item => item.id !== id);
            setData(dt);
        }
    }

    const handleSave = () => {
        const newEntry = {
            id: data.length + 1,
            firstName,
            lastName,
            age
        };
        setData([...data, newEntry]);
        handleClear();
    }

    const handleUpdate = () => {
        const updatedData = data.map(item =>
            item.id === id ? { ...item, firstName, lastName, age } : item
        );
        setData(updatedData);
        setIsUpdate(false);
        handleClear();
    }

    const handleClear = () => {
        setId('0');
        setFirstName('');
        setLastName('');
        setAge('0');
    }

    return (
        <div>
            <div className='flex justify-center my-10 '>
                <div>
                    <label>First Name:
                        <input
                            type='text'
                            placeholder='Enter Your First Name'
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                        />
                    </label>
                </div>
                <div>
                    <label>Last Name:
                        <input
                            type='text'
                            placeholder='Enter Your Last Name'
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                        />
                    </label>
                </div>
                <div>
                    <label>Age:
                        <input
                            type='text'
                            placeholder='Enter Your Age'
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                        />
                    </label>
                </div>
                <div>
                    <button className='' onClick={isUpdate ? handleUpdate : handleSave}>
                        {isUpdate ? 'Update' : 'Save'}
                    </button>
                    <button onClick={handleClear}>Clear</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.age}</td>
                            <td>
                                <button className='edit-button' onClick={() => handleEdit(item.id)}>Edit</button>
                                <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableCurd;
