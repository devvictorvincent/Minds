export const goViews = async ({id}) => {
    const url =`https://api.vikaxnet.com/api/post/viewup/${id}`;
    console.log('post view id:')
    console.log(id);
    const response = await fetch(url);
    
    // Checking if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
   // const data = await response.json();
    console.log('Views Updated');
    //console.log(data);
  };