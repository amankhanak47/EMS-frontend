const BASE_URL = "https://ems-backend-w5vv.onrender.com";
const callApi = async (endpoint, method, body, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["x-auth-token"] = token;
    }

    const requestOptions = {
      method: method,
      headers: headers,
    };

    if (body !== null) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, errors: "Internal Server Error" };
  }
};


export const loginUser = async (userData) => {
  return callApi("auth/user-login", "POST", userData);
};
export const getAllMentees = async () => {
  return callApi("ems/get-all-employee", "GET", null, localStorage.getItem("user-token"));
};