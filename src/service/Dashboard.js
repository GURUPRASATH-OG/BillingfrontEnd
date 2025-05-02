import axios from "axios";

export const fetchDashboardData =async () =>
{
   return await axios.get("https://billingbackend-production-433c.up.railway.app/api/v1.0/dashboard",
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")} `}}
    )
}
