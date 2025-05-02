import axios from "axios";

export const addCategory = async(category)=>
{
   return  await axios.post('https://billingbackend-production-433c.up.railway.app/api/v1.0/admin/categories',category,
    {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
   );
}

export const deleteCategory = async(categoryId)=>
{
    console.log("deleting category with ID:"+categoryId);
    return await axios.delete(`https://billingbackend-production-433c.up.railway.app/api/v1.0/admin/categories/${categoryId}`,
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
    );
    
}

export const fetchCategories = async()=>
{
    return await axios.get("https://billingbackend-production-433c.up.railway.app/api/v1.0/categories",
        {headers:{'Authorization':`Bearer ${localStorage.getItem("token")}`}}
    );
}
