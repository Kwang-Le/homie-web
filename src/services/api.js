// api.js

import { useResidentStore } from "@/stores/resident";
import { useUserStore } from "@/stores/user";

// Function to fetch data from the API and store it in the Pinia store
export default async function fetchDataAndStore() {
  const endpointResident = 'https://homie-json-server.vercel.app/residents';
  const endpointAccounts = 'https://homie-json-server.vercel.app/accounts';

  try {
    const responseResidents = await fetch(endpointResident);
    const dataResidents = await responseResidents.json();

    const responseAccounts = await fetch(endpointAccounts);
    const dataAccounts = await responseAccounts.json();
    // Store the data in the Pinia store
    useResidentStore().setResidentsData(dataResidents);
    useUserStore().setAllUsersData(dataAccounts);

    // return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
