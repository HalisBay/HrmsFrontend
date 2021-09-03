import axios from "axios";

export default class JobAdvertisementService{
    getJobs(){

            return axios.get("http://localhost:8080/api/jobAdvertisement/getall")
    }
}