export const getData = async (url) => {
    const response = await fetch(url);
    
    // Checking if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data;
  };