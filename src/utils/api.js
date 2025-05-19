/**
 * description : get all data from a json file.
 * @param {string} url
 * @returns {Promise<Object[]>} 
 * @example getData("/logements.json") => { "data": [ { "id": 1, "name": "name1" }, { "id": 2, "name": "name2" } ] }
 */
const getData = async (url) => {
  try {
    const baseUrl = window.location.origin;
    const response = await fetch(baseUrl + url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Anomalie du fétch')
    }
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  }
};


/**
 * description : get data from a json file by id.
 * @param {string} url
 * @param {number} id
 * @returns {Promise<Object[]>} - data from the json file.
 * @example getDataById("/logements.json", 1) => { "id": 1, "name": "name1" }
 */
const getDataById = async (url, id) => {
  try {
    const data = await getData(url);
    const dataById = data.find((item) => item.id === id);
    return dataById;
  } catch (error) {
    console.error(`Erreur lors de la récupération des données : ${error}`);
  }
};

export { getData, getDataById };
