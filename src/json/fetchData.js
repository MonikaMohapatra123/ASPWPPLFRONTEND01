
// fetchData.js
const  fetchAndStoreData = async () => {
    try {
      const response = await fetch("https://json-backend.vercel.app/json/6846c2837decf7ad6c448eae");
      const result = await response.json();
      // Save only the `data` part of the response to local storage
      localStorage.setItem('apiData', JSON.stringify(result.data));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // Fetch and store data on reload
  window.addEventListener('load', fetchAndStoreData);
  export  const getStoredData = () => {
    const storedData = localStorage.getItem('apiData');
    return storedData ? JSON.parse(storedData) : null;
  };
  
export default getStoredData;





