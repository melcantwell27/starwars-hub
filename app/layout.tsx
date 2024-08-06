// /app/layout.tsx
'use client'

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import './globals.css';
import SearchBar from '../components/SearchBar'; // Import SearchBar component


// Define the props for the RootLayout component
interface RootLayoutProps {
  children: ReactNode;
}

// wrap the children in the RootLayout component & makes store available to children
// const RootLayout = ({ children }: RootLayoutProps) => {
//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>
//           {/* children: any component that needs access to the store */}
//           {children} 
//         </Provider>
//       </body>
//     </html>
//   );
// };

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Provider store={store}>
          <header className="sticky top-0 z-50 flex flex-col items-center py-2">
            <h1 className="text-4xl font-extrabold text-center 
             text-gold" style={{ fontFamily: 'StarWars, sans-serif' }}>
              Star Wars Galactic Hub
            </h1>
            <SearchBar />
          </header>
          <main className="pt-1 pb-4"> {/* Padding adjusted for proper layout */}
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
