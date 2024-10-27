import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setOtherUsers } from '../redux/userSlice';

const useGetOtherUsers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                // Configure axios to include credentials
                const res = await axios.get('https://chatwavebackend-r9s7.onrender.com/api/v1/user', {
                    withCredentials: true,
                });
                
                // Dispatch data to the Redux store
                dispatch(setOtherUsers(res.data));
                console.log("Other users -> ", res.data);
            } catch (error) {
                console.error("Error fetching other users:", error.message);
            }
        };

        fetchOtherUsers();
    }, [dispatch]); // Include `dispatch` in the dependency array

    return null;
};

export default useGetOtherUsers;
