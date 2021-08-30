import { func } from 'prop-types';
import React, { createContext, useState, useEffect } from 'react';

import api from '../api/api';

const Context = createContext();

function AuthProvider({ children }) { // children é tudo que estiver dentro do componente AuthProvider no App
    const { authenticated, setAuthenticated } = useState(false);
    
    //useEffect

    async function handleSignin() {
        const { data: { token } } = await api.post('/signin');

        localStorage.setItem('token', JSON.stringify(token));
        api.default.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
    }

    return (
        <Context.Provider value={{ authenticated: false }}>
            {children}
        </Context.Provider>
    );
}



export { Context, AuthProvider };


