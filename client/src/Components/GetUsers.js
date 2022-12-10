import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { LOAD_ALL_USERS } from '../GraphQL/Queries'

 
function GetUsers() {

    const {error, loading , data} = useQuery(LOAD_ALL_USERS);
    const [allUsers, setAllUsers] = useState([]); // empty to begin with
    
    useEffect(() => {
        if (data) {
            setAllUsers(data.getAllUsers);
        };
    // will change when data comes through
    }, [data]);

    return ( 
        <div>
            {allUsers.map( (userValue) => {
                return (
                    <div>
                        <p>id: {userValue.id}</p>
                        <h3>{userValue.firstName + " " + userValue.lastName}</h3>
                        <p>{userValue.email}</p>
                        <br></br>
                    </div>
                )
            } )}
        </div>
    )
};

export default GetUsers;