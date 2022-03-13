import axios from "axios";
import { PersonsWithName } from "../pages/api/events/get";

export interface CreateEvent {
  name: string;
  description: string;
  date: Date;
}

export const createEvent = async (payload: CreateEvent) => {
  await axios.post("http://localhost:3000/api/events/create", payload);
};

export const getEvents = async () => {
  const { data } = await axios.get<PersonsWithName>(
    "http://localhost:3000/api/events/get"
  );
  return data;
};
