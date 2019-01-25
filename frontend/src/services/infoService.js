import axios from 'axios'
const url = "http://localhost:5000"

const service = {
  getCities : async function() {
    try {
      const response = await axios.get(`${url}/locations`);  
      const originalCities = response.data.cities;
      const mapCities = {};
      for(let city of originalCities) {
        mapCities[city.city] = city;
      }
      console.log(mapCities);
      return mapCities;
    } catch(error) {
      throw error;
    }
  },
  getSingleSelections : function(){
    return axios.get(`${url}/single_choice_attributes`)
  },
  uploadImage: function(file){
    const formData = new FormData();
    formData.append('profilePicture', file);
    axios.post(`${url}/api/upload`, formData)
    .then(
      (response) => {
        console.log(response);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    );
  }
}

export default service;
