import axios from 'axios';

export default axios.create({
    baseUrl: "http://api.unsplash.com/",
    headers: {
        Authorization: " Client-ID PCMPWbI8tHwVB23evxpzL0Y052_RuIye1p20jcH6DxI"
    }
})