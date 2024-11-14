import React from 'react';
import SearchBar from "../Components/SearchBar";
import '../Styles/Find.css';
import { ApparelContext, ApparelProvider } from '../Context/ApparelContext';

const Find = () => {
    return (
        <>
        <ApparelProvider>
            <h1 id = "title">Apparel Finder</h1>
            <SearchBar />
        </ApparelProvider>
            
        </>
    );
};

export default Find;
