// components/SearchBar.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { setSearch, setPage, fetchAllCharacters } from '../redux/slices/characterSlice';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  // importing data from the redux store, selecting it from the RootState of the store
  const searchTerm = useSelector((state: RootState) => state.characters.search);
  // state to hold the search term
  const [inputValue, setInputValue] = useState(searchTerm);

  // handle search change
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // handle search submit
  const handleSearchSubmit = () => {
    dispatch(setSearch(inputValue));
    dispatch(setPage(1)); // Reset to the first page on search
    dispatch(fetchAllCharacters({ page: 1, search: inputValue }));
  };

  // handle return to all [reset]
  const handleReturnToAll = () => {
    setInputValue('');
    dispatch(setSearch(''));
    dispatch(setPage(1)); // Reset to the first page
    dispatch(fetchAllCharacters({ page: 1, search: '' }));
  };

  // handle keydown (can submit on enter)
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <div className="flex flex-col items-center my-4 space-y-2">
      <div className="relative w-full max-w-md">
        <TextField
          label="Search Characters"
          variant="outlined"
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          style={{ backgroundColor: '#1c1c1e', color: 'white', borderColor: '#2c2c2e' }}
          InputProps={{
            style: {
              color: 'white',
              borderColor: '#2c2c2e',
              borderRadius: '4px',
              border: '1px solid #2c2c2e',
            },
            endAdornment: (
              <SearchIcon
                onClick={handleSearchSubmit}
                style={{ cursor: 'pointer', color: 'white' }}
              />
            ),
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
      </div>
      {searchTerm && (
        <button
          onClick={handleReturnToAll}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          Return to All Characters
        </button>
      )}
    </div>
  );
};

export default SearchBar;
