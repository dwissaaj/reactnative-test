import { Client } from 'react-native-appwrite';

const client = new Client();

client
  .setEndpoint(`${process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT_ID}`)
  .setProject(`${process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID}`)
  .setPlatform(`${process.env.EXPO_PUBLIC_APPWRITE_PLATFORM_ID}`);
