import axios from "axios";

const API_URL = "http://34.101.205.48:8080/v1/graphql";
const API_HEADERS = {
  "Content-Type": "application/json",
  "x-hasura-admin-secret": "I0DKu96S7buf",
};

export const getAllTest = async (payload) => {
  const API_QUERY = `
  query MyQuery {
    test {
      nama
      id
    }
  }
    `;
  try {
    const data = await axios.post(
      API_URL,
      { query: API_QUERY },
      { headers: API_HEADERS }
    );
    return data.data.data;
  } catch (error) {
    console.log(error);
    return;
  }
};
