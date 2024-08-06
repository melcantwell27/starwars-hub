// /components/CharacterModal.tsx
'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { clearSelectedCharacter, fetchCharacterHomeworld } from '../redux/slices/characterSlice';
import dayjs from 'dayjs';

// CharacterModal component
const CharacterModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

// importing data from the redux store, selecting it from the RootState of the store
const { selectedCharacter, characters, homeworld, homeworldStatus } = useSelector((state: RootState) => state.characters);
const character = characters.find((char) => char.name === selectedCharacter);


// fetch homeworld on modal open
  useEffect(() => {
    if (selectedCharacter) {
      if (character) {
        dispatch(fetchCharacterHomeworld(character.homeworld));
      }
    }
  }, [selectedCharacter, dispatch]);

  if (!character) return null;

  // handle close modal
  const handleClose = () => {
    dispatch(clearSelectedCharacter());
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#B3D9FF] p-6 rounded-lg shadow-lg max-w-lg w-full relative border border-[#003B5C]">
        <button
          className="absolute top-4 right-4 text-xl font-bold text-[#003B5C] hover:text-black"
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-[#003B5C] border-b border-[#003B5C] pb-2">{character.name}</h2>
        <div>
          <p className="text-lg text-[#003B5C]"><strong>Height:</strong> {(parseInt(character.height) / 100).toFixed(2)} m</p>
          <p className="text-lg text-[#003B5C]"><strong>Mass:</strong> {character.mass} kg</p>
          <p className="text-lg text-[#003B5C]"><strong>Birth Year:</strong> {character.birth_year}</p>
          <p className="text-lg text-[#003B5C]"><strong>Number of Films:</strong> {character.films.length}</p>
          <p className="text-lg text-[#003B5C]"><strong>Date Added:</strong> {dayjs(character.created).format('DD-MM-YYYY')}</p>

          {homeworldStatus === 'loading' && (
            <div className="border-t border-[#003B5C] pt-4 mt-4">
              <p className="text-lg text-[#003B5C] mb-32">Loading homeworld data...</p>
            </div>
          )}


          {homeworldStatus === 'succeeded' && homeworld && (
            <div className="border-t border-[#003B5C] pt-4 mt-4">
              <h3 className="text-xl font-semibold mb-2 text-[#003B5C]">Homeworld</h3>
              <p className="text-lg text-[#003B5C]"><strong>Name:</strong> {homeworld.name}</p>
              <p className="text-lg text-[#003B5C]"><strong>Terrain:</strong> {homeworld.terrain}</p>
              <p className="text-lg text-[#003B5C]"><strong>Climate:</strong> {homeworld.climate}</p>
              <p className="text-lg text-[#003B5C]"><strong>Residents:</strong> {homeworld.population} residents</p>
            </div>
          )}
          {homeworldStatus === 'failed' && <p className="text-lg text-[#003B5C]">Failed to load homeworld data.</p>}
        </div>
      </div>
    </div>
  );
};


export default CharacterModal;
