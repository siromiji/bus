import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosConfig from "../../configs/axiosConfig";
import axios from "axios";


const busIndex = createAsyncThunk(
    'busSlice/busIndex',
    async () => {
        const url = `${axiosConfig.baseUrl}/getBs02`;
        const config = {
            params:{
                serviceKey: axiosConfig.serviceKey,
                routeId : axiosConfig.routeId,
            }
        }

        const response = await axios.get(url,config);
        return response.data.body;
    }
);

export {busIndex};