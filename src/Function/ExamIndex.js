import axios from "axios";

export const getIndustryUserMasterDetails = async (_id) => {
  return await axios.get(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/IndustryUserMaster-details/${_id}`
  );
};

  export const getUserGroup = async (_id) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/UserGroupMaster/${_id}`
    );
  };
  
 export const listTestCategory = async () => {
   return await axios.get(
     `${process.env.REACT_APP_API_URL_BPC}/api/auth/list-active/TestCategoryMaster`
   );
 };
 
  export const listTestGroupByName = async (groupName) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/list/TestCatMaster-details/${groupName}`
    );
  };