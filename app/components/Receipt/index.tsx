import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
const initialReceiptRecords = [
{
  ReceiptNo: '2023-001',
  Item: 'Oil',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
},
{
  ReceiptNo: '2023-002',
  Item: 'Sugar',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
 },
{
  ReceiptNo: '2023-003',
  Item: 'Gloves',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
 },
{
  ReceiptNo: '2023-004',
  Item: 'Milk',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
},
{
  ReceiptNo: '2023-005',
  Item: 'Tea bags',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
  quality:'',
},
{
  ReceiptNo: '2023-006',
  Item: 'Coffee',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
},
{
  ReceiptNo: '2023-007',
  Item: 'Salt',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
  },
{
  ReceiptNo: '2023-008',
  Item: 'Chocolate',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
},
{
  ReceiptNo: '2023-009',
  Item: 'Masala',
  Amount: '24,000',
  Quantity: '400 Ltrs',
  DateReceived: '2023/09/25',
},
{
  ReceiptNo: '2023-010',
  Item: 'Honey',
  Amount: '24,000',
  Quantity: '450 Ltrs',
  DateReceived: '2023/09/25',
},
];
const ReceiptRecord = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [receiptRecords, setReceiptRecord] = useState(initialReceiptRecords);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
const handleSearchChange = (e: { target: { value: string; }; }) => {
  const query = e.target.value.toLowerCase();
    setSearchQuery(query);
const filtered = initialReceiptRecords.filter((record) => {
  const recordValues = Object.values(record).map((value) =>
        typeof value === "string" ? value.toLowerCase() : value
      );
      return recordValues.some((value) => value.includes(query));
    });
    setReceiptRecord(filtered);
  };
const handleDelete = (index: number) => {
    const newDataRecords = [...receiptRecords];
    newDataRecords.splice(index, 1);
    setReceiptRecord(newDataRecords);
};
const handleEdit = (index: number) => {
  setIsEditing(true);
  setEditIndex(index);
};
const handleEditChange = (field: string, value: string) => {
  setReceiptRecord(prevData => {
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
  <h1 className="text-2xl font-semibold text-[#1A1344] mb-2 ml-4">Manage Receipts</h1>
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
          <th className="py-4 px-14 text-left text-20 font-semibold">Receipt No</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Item</th>
          <th className="py-4 px-6 text-left text-20 font-semibold">Amount</th>
          <th className="py-4 px-14 text-left text-20 font-semibold">Quantity</th>
          <th className="py-4 px-14 text-left text-20 font-semibold">Date Received</th>

        </tr>
      </thead>
      <tbody>
          {receiptRecords.map((record, index) => (
            <tr key={index} className="border-b border-solid border-gray-500">
              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.ReceiptNo}
                    onChange={(e) => handleEditChange('ReceiptNo', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.ReceiptNo
                )}
              </td>
              <td className="py-4 px-10">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Item}
                    onChange={(e) => handleEditChange('Item', e.target.value)}
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
                    onChange={(e) => handleEditChange('Amount', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Amount
                )}
              </td>

              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.Quantity}
                    onChange={(e) => handleEditChange('Quantity', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.Quantity
                )}
              </td>

              <td className="py-4 px-16">
                {isEditing && editIndex === index ? (
                  <input
                    type="text"
                    value={record.DateReceived}
                    onChange={(e) => handleEditChange('DateReceived', e.target.value)}
                    className="bg-gray-300 text-gray-800 rounded p-2"/>
                ) : (
                  record.DateReceived
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
);
};
export default ReceiptRecord;