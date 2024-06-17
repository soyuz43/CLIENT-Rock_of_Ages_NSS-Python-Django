import React, { useState, useEffect } from 'react';
import { RockList } from './components/RockList';

export const App = () => {
    const [rocks, setRocks] = useState([]);

    const fetchRocks = async (showAll) => {
        const response = await fetch('http://localhost:8000/rocks', {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("rock_token")).token}`
            }
        });
        const data = await response.json();
        setRocks(data);
    };

    useEffect(() => {
        fetchRocks(true);
    }, []);

    return (
        <div className="App">
            <RockList showAll={true} fetchRocks={fetchRocks} rocks={rocks} />
        </div>
    );
};
