import axios from "axios";

export const login = async (data)=>
{
   return await axios.post("https://billingbackend-production-433c.up.railway.app/api/v1.0/login",data);
}
