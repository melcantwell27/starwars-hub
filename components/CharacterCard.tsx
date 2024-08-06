// /components/CharacterCard.tsx
'use client'

import React from 'react';
import { useDispatch } from 'react-redux';
import { Character } from '../types';
import { setSelectedCharacter } from '../redux/slices/characterSlice';
import { speciesColors } from '../constants/speciesColors'; // Import the species color constants


// type definition for CharacterCard props 
interface CharacterCardProps {
  character: Character;
}

// CharacterCard component
const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const dispatch = useDispatch();
  
  // Get the color based on the species ID
  // Default to speciesColors['default] if ID not found
  const cardColor = speciesColors[character.species[0]] || speciesColors['default']; 
 
  // Handle click event to set the selected character
  const handleClick = () => {
    dispatch(setSelectedCharacter(character.name));
  };

  return (
    <div
      className="character-card bg-white p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
      onClick={handleClick}
      style={{ backgroundColor: cardColor }} // Apply the background color
    >
      <img
        src={`https://picsum.photos/seed/${character.name}/200/300`}
        alt={character.name}
        className="w-full h-auto rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
