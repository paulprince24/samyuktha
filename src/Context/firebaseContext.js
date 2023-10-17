import React, { createContext, useContext } from 'react';
import firebase,{db} from '../Firebase/Config';

const FirebaseContext = createContext(null);
export const useFirebase = () => {
    return useContext(FirebaseContext);
};

export const FirebaseProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{db}}>
            {children}
        </FirebaseContext.Provider>
    );
};
