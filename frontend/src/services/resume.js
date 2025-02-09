import axios from "axios";
import { apiURL } from "../theme.config";

export const addpersonalDetailsService = async (data) => {
    try {
        const response = await axios.post(apiURL, data, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error in personalDetailsService:", error);
        throw error;
    }
};
