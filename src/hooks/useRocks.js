// File Path: Rock-of-Ages-Python/CLIENT-Rock_of_Ages_NSS-Python-Django/src/hooks/useRocks.js

import { useState, useEffect } from "react";

export const useRocks = () => {
    const [rocks, setRocks] = useState([]);  // ! Initialize rocks state with an empty array

    const fetchRocks = async () => {
        try {
            const response = await fetch("/api/rocks");  // ! Fetch rocks from the API
            const data = await response.json();
            setRocks(data);  // ! Set the fetched rocks to the state
        } catch (error) {
            console.error("Error fetching rocks:", error);
        }
    };

    useEffect(() => {
        fetchRocks();  // ! Fetch rocks on component mount
    }, []);

    return { rocks, fetchRocks };
};
