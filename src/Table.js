import React from 'react'
const Table=({data})=>{
    return(
    <table >
        <tbody align="center">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>BloodType</th>
                <th>Organ</th>
                <th>TissueSize</th>
                
            </tr>
            {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.bloodtype}</td>
            <td>{item.organ}</td>
            <td>{item.tissuesize}</td>
          </tr>
        ))}
        </tbody>
    </table>
    )
}
export default Table;