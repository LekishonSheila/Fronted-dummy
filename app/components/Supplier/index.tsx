import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const initialItemRecords = [
{
  Name: 'James Kariuki',
  PhoneNumber: '0795463542',
  Address: 'South B,Nairobi',
},
{
  Name: 'Ben Gitau',
  PhoneNumber: '0712345635',
  Address: 'South C,Nairobi',
 },
{
  Name: 'Ann Akoth',
  PhoneNumber: '0789675432',
  Address: 'Rongai, Nairobi',
 },
{
  Name: 'Jane Kasaya',
  PhoneNumber: '0746756893',
  Address: 'Kayole, Nairobi',
},
{
  Name: 'John Mburu',
  PhoneNumber: '0765435627',
  Address: 'Kibera, Nairobi',
},
{
  Name: 'James Kuria',
  PhoneNumber: '0712435672',
  Address: 'Karen, Nairobi',
},
{
  Name: 'Joe Mbua',
  PhoneNumber: '0712654376',
  Address: 'Korongo, Nairobi',
  },
{
  Name: 'Mary Duo',
  PhoneNumber: '0798456783',
  Address: 'Karen, Nairobi',
},
{
  Name: 'Kariuki Ben',
  PhoneNumber: '0745678294',
  Address: 'Kayole, Nairobi',
},
{
  Name: 'Faith Akoth',
  PhoneNumber: '0706119709',
  Address: 'Ndege, Nairobi',
},
];
const DataRecord = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dataRecords, setDataRecord] = useState(initialItemRecords);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
const handleSearchChange = (e: { target: { value: string; }; }) => {
  const query = e.target.value.toLowerCase();
    setSearchQuery(query);
const filtered = initialItemRecords.filter((record) => {
  const recordValues = Object.values(record).map((value) =>
        typeof value === "string" ? value.toLowerCase() : value
      );
      return recordValues.some((value) => value.includes(query));
    });
    setDataRecord(filtered);
  };
const handleDelete = (index: number) => {
    const newDataRecords = [...dataRecords];
    newDataRecords.splice(index, 1);
    setDataRecord(newDataRecords);
};
const handleEdit = (index: number) => {
  setIsEditing(true);
  setEditIndex(index);
};
const handleEditChange = (field: string, value: string) => {
  setDataRecord(prevData => {
    return prevData.map((record, index) => {
      if (index === editIndex) {
        return { ...record, [field]: value };
      }
      return record;
    });
  });
};
const handleSaveEdit = () => {
  setIsEditing(false);
  setEditIndex(-1);
};
const cancelEdit = () => {
  setIsEditing(false);
  setEditIndex(-1);
};
return (
<div className="py-4 px-60 font-['Sanchez'] ">
  <h1 className="text-2xl font-semibold text-[#1A1344] mb-2 ml-4">Manage Suppliers</h1>
  <div className="flex space-x-4 mb-4">
    <div className="relative ml-auto mr-40">
      <input
         type="search"
          placeholder="Search..."
          className="border border-gray-500 rounded-full p-2 text-black pl-10 pr-6 w-full focus:outline-none"
          onChange={handleSearchChange}/>
          <FaSearch className="w-6 h-6 text-gray-900 absolute left-3 top-1/2 transform -translate-y-1/2" />
      </div>
    </div>
    <table className="w-full space-evenly" style={{tableLayout: 'fixed'}}>
      <thead>
        <tr className="border-b border-solid border-gray-500">
          <th className="py-4 px-14 text-left text-20 font-semibold">Name</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Phone Number</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Address</th>
        </tr>
      </thead>
      <tbody>
          {dataRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-500">
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Name}
                    onChange={(e) => handleEditChange('Name', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Name
                )}
              </td>
              <td className="py-4 px-10">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.PhoneNumber}
                    onChange={(e) => handleEditChange('NextCalibrationTime', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.PhoneNumber
                )}
              </td>
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Address}
                    onChange={(e) => handleEditChange('SerialNumber', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Address
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
);
};
export default DataRecord;