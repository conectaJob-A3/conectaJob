import React, { createContext, useContext, useState } from 'react';

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const [navigation, setNavigation] = useState(null);

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context.navigation;
};
