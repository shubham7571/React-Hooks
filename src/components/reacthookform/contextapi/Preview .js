import React, { useContext } from 'react'
import { NewContext } from './NewContext'
import CommonTable from'../../commonComponent/commonTable/CommonTable'
function Preview(dataResult) {
    const { details } = useContext(NewContext)

    return (
        <div>
            {details.map((data, index) => (
                <div key={index}>
                    <div className='text-start'>
                        <h1>BasicInformation</h1>
                        <h1>First Name :{data.firstName}</h1>
                        <h1>Last Name :{data.lastName}</h1>
                        <h1> Address :{data.address}</h1>
                        <h1>City :{data.city}</h1>
                        <div>
                            <h1>PersonalInformation</h1>
                            <h1>Name:{data.Name}</h1>
                            <h1>Date of Birth:{data.dob}</h1>
                            <h1>E-mail:{data.email}</h1>
                            <h1>Mobile:{data.mobile}</h1>
                            <h1>Gender :{data.gender}</h1>
                        </div>
                    </div>

                </div>
            ))}
            <div>
                <CommonTable
                dataResult={dataResult}
                />
            </div>
        </div>
    )
}

export default Preview 