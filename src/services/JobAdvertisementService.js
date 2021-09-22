import axios from "axios";

export default class JobAdvertisementService{
    getJobs(){

            return axios.get("http://localhost:8080/api/jobAdvertisement/getall")
    }

    findById(id){
        return axios.get("http://localhost:8080/api/jobAdvertisement/findById?id="+id)
    }

    addJob(data){
        return axios.post("http://localhost:8080/api/jobAdvertisement/add",data)
    }
}