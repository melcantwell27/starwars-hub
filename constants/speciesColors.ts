// /constants/speciesColors.ts

// Function to generate the URL string format
const speciesUrl = (id: number): string => `https://swapi.dev/api/species/${id}/`;

// Mapping of species IDs to their respective colors
export const speciesColors: Record<string, string> = {
    ['default']: '#FF5733',  // Vibrant Red-Orange
    [speciesUrl(1)]: '#33FF57',  // Bright Green
    [speciesUrl(2)]: '#3357FF',  // Bright Blue
    [speciesUrl(3)]: '#FF33A6',  // Bright Pink
    [speciesUrl(4)]: '#FFD733',  // Bright Yellow
    [speciesUrl(5)]: '#33FFD7',  // Bright Teal
    [speciesUrl(6)]: '#FF6F33',  // Vivid Orange
    [speciesUrl(7)]: '#33FF6F',  // Vivid Green
    [speciesUrl(8)]: '#6F33FF',  // Vibrant Purple
    [speciesUrl(9)]: '#FF33C4',  // Neon Pink
    [speciesUrl(10)]: '#C4FF33', // Neon Yellow-Green
    [speciesUrl(11)]: '#33C4FF', // Bright Cyan
    [speciesUrl(12)]: '#FF8C33', // Bright Coral
    [speciesUrl(13)]: '#33FF8C', // Bright Mint
    [speciesUrl(14)]: '#8C33FF', // Bright Lavender
    [speciesUrl(15)]: '#FF3333', // Bright Red
    [speciesUrl(16)]: '#33FF33', // Neon Green
    [speciesUrl(17)]: '#3333FF', // Electric Blue
    [speciesUrl(18)]: '#FF33FF', // Electric Magenta
    [speciesUrl(19)]: '#FFFF33', // Neon Yellow
    [speciesUrl(20)]: '#33FFFF', // Light Cyan
    [speciesUrl(21)]: '#FF6633', // Bright Peach
    [speciesUrl(22)]: '#33FF66', // Bright Lime
    [speciesUrl(23)]: '#6633FF', // Deep Purple
    [speciesUrl(24)]: '#FF3366', // Bright Fuchsia
    [speciesUrl(25)]: '#66FF33', // Bright Grass Green
    [speciesUrl(26)]: '#33FF66', // Vibrant Light Green
    [speciesUrl(27)]: '#6633FF', // Electric Violet
    [speciesUrl(28)]: '#FF33A6', // Neon Pink
    [speciesUrl(29)]: '#FF9933', // Vivid Orange
    [speciesUrl(30)]: '#33FF99', // Vibrant Aqua
    [speciesUrl(31)]: '#FF3366', // Vivid Pink
    [speciesUrl(32)]: '#66FF99', // Light Mint
    [speciesUrl(33)]: '#9933FF', // Bright Purple
    [speciesUrl(34)]: '#FF33D1', // Electric Rose
    [speciesUrl(35)]: '#33FFD1', // Bright Teal
    [speciesUrl(36)]: '#FF6F99', // Soft Coral
    [speciesUrl(37)]: '#33FF77', // Vibrant Green
    [speciesUrl(38)]: '#6F33FF', // Electric Indigo
    [speciesUrl(39)]: '#FF3399', // Hot Pink
    [speciesUrl(40)]: '#66FF33', // Neon Lime Green
};
