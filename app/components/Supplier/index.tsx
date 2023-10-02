import React, { useState } from 'react';
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const initialItemRecords = [
{
  ReceiptNo: 'Mayonese',
  Item: 'Food stuff',
  Amount: 'Food stuff',
  Quantity: '100gms',
  DataReceived: '100gms',
},
{
  ReceiptNo: 'Mayonese',
  Item: 'Food stuff',
  Amount: 'Food stuff',
  Quantity: '100gms',
  DataReceived: '100gms',
 },
{
  ReceiptNo: 'Mayonese',
  Item: 'Food stuff',
  Amount: 'Food stuff',
  Quantity: '100gms',
  DataReceived: '100gms',
 },
{
  ReceiptNo: 'Mayonese',
  Item: 'Food stuff',
  Amount: 'Food stuff',
  Quantity: '100gms',
  DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
},
{
   ReceiptNo: 'Mayonese',
   Item: 'Food stuff',
   Amount: 'Food stuff',
   Quantity: '100gms',
   DataReceived: '100gms',
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
  <h1 className="text-2xl font-semibold text-orange-400 mb-2 ml-4">Data Records</h1>
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
          <th className="py-4 px-14 text-left text-20 font-semibold">Item</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Category</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Quantity</th>
          <th className="py-4 px-14 text-left text-20 font-semibold">Action</th>
        </tr>
      </thead>
      <tbody>
          {dataRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-500">
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.  Item}
                    onChange={(e) => handleEditChange('Item', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Item
                )}
              </td>
              <td className="py-4 px-10">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Item}
                    onChange={(e) => handleEditChange('NextCalibrationTime', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Item
                )}
              </td>
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Amount}
                    onChange={(e) => handleEditChange('SerialNumber', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Amount
                )}
              </td>
              <td className="py-4 px-16 flex space-x-2">
                {isEditing && editIndex === index ? (
                  <>
                <button
                  className="bg-orange-400 text-black text-lg px-4 py-2 rounded hover:bg-indigo-600"
                  onClick={handleSaveEdit}>Save</button>
                <button
                  className="bg-indigo-600 text-white text-lg px-4 py-2 rounded hover:bg-orange-400"
                  onClick={cancelEdit}>Cancel</button>
                  </>
                ) : (
                  <BiEdit
                    size={25}
                    className="text-indigo-600 cursor-pointer"
                    onClick={() => handleEdit(index)}/>
                )}
                <MdDeleteForever
                  size={25}
                  className="text-orange-400 cursor-pointer"
                  onClick={() => handleDelete(index)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
);
};
export default DataRecord;