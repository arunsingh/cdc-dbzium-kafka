import axios from "axios";


const checkStatus = async () => {
    const status = await axios.get('http://localhost:8083/connectors/postgres-connector/status');
    console.log(status.data);
}

checkStatus()