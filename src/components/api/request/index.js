import axios from 'axios';
import { config } from '../index'

const request = {
    callApi: (endpoint, method = 'GET', body) => {
        return axios({
            method,
            url: `${config.HOST}/${endpoint}`,
            data: body
        }).catch(err => {
            console.log(err);
        });
    }
}

export default request;