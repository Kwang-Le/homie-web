// api.js

import { useResidentStore } from "@/stores/resident";

// Function to fetch data from the API and store it in the Pinia store
export default async function fetchDataAndStore() {
  const endpoint = 'https://homie-json-server.vercel.app/residents';

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Store the data in the Pinia store
    useResidentStore().setResidentsData(data);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
