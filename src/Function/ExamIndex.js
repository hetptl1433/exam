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

  export const getTestCatMasterDetails = async (_id) => {
    return await axios.get(
      `${process.env.REACT_APP_API_URL_BPC}/api/auth/get/TestCatMaster-details/${_id}`
    );
  };

    export const getTestQuestions = async (_id) => {
      return await axios.get(
        `${process.env.REACT_APP_API_URL_BPC}/api/auth/location/TestQuestionMasterId/${_id}`
      );
    };


export const createTestData = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/create/ResultAns`,
    values
  );
};

export const createTestResult = async (values) => {
  return await axios.post(
    `${process.env.REACT_APP_API_URL_BPC}/api/auth/create/ResultData`,
    values
  );
};