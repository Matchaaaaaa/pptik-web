import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

export default function Adminpage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);
    
    function getUsers() {

        axios.get('http://localhost:80/pptik/users').then(function(responses) {
            console.log(responses.data);
            setUsers(responses.data);
        });

    }
    
    return (
        <>
        
        <div className="md:px-32 py-8 w-full">
            <h1 className="text-center text-2xl mb-20">LIST DATA KONTAK</h1>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
                <table className="min-w-full bg-white">
                    <thead className="border border-black">
                        <tr>
                        <th className="border border-black">Nama Depan</th>
                        <th className="border border-black">Nama Belakang</th>
                        <th className="border border-black">Email</th>
                        <th className="border border-black">Opsi</th>
                        <th className="border border-black">Pesan</th>
                        </tr>
                    </thead>
                    <tbody className="border border-black">
                        {users.map((user, key) => 
                            <tr key={key} className="text-center">
                                <td className="border border-black">{user.first}</td>
                                <td className="border border-black">{user.last}</td>
                                <td className="border border-black">{user.email}</td>
                                <td className="border border-black">{user.option}</td>
                                <td className="border border-black">{user.message}</td>
                            </tr>

                        )}

                    </tbody>
                </table>
            </div>
        </div>  
        </>
    )
}