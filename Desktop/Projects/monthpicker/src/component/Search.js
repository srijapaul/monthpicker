import React, { useState } from 'react';

const Search = () => {
  const [searchedMonth, setSearchedMonth] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

  const handleSearchChange = (event) => {
    setSearchedMonth(event.target.value.toUpperCase());
  };

  const handleMonthSelect = (event) => {
    setSelectedMonth(event.target.value);
    setSearchedMonth(event.target.value);
  };

  const filteredMonths = months.filter(month => month.startsWith(searchedMonth));

  return (
    <div>
      <h1>Month Picker</h1>
      <label>Search : </label>
      <input type="text" value={searchedMonth} onChange={handleSearchChange} />
      {searchedMonth && (
        <select size={filteredMonths.length} value={selectedMonth} onChange={handleMonthSelect}>
          {filteredMonths.map((month, index) => (
            <option key={index} value={month}>{month}</option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Search;
