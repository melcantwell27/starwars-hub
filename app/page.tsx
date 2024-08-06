import Image from "next/image";
import CharacterList from "../components/CharacterList";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
//       <h1 className="text-4xl font-extrabold text-center mb-8 text-gold" style={{ fontFamily: 'StarWars, sans-serif' }}>
//         Star Wars Galactic Hub
//       </h1>
//       <CharacterList />
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <CharacterList />
    </div>
  );
}