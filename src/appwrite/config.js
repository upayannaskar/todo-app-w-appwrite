import { Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_API_URL)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);


const databases = new Databases(client)

export { client, databases }