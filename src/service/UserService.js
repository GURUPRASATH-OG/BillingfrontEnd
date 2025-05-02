import axios from "axios";

export const addUser = async (user) =>
{
    return await axios.post("https://billingbackend-production-433c.up.railway.app/api/v1.0/admin/register",
        user,
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
    )
}
export const deleteUser = async (userId)=>
{
    return await axios.delete(`https://billingbackend-production-433c.up.railway.app/api/v1.0/admin/users/${userId}`,
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
    )
}

export const fetchUsers = async () =>
{
    return await axios.get("https://billingbackend-production-433c.up.railway.app/api/v1.0/admin/users",
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
    )
}
