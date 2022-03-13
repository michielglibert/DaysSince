import axios from "axios";
import { PersonsWithName } from "../pages/api/events/get";

export interface CreateEvent {
  name: string;
  description: string;
  date: Date;
}

export const createEvent = async (payload: CreateEvent) => {
  await axios.post(`/api/events/create`, payload);
};

export const getEvents = async () => {
  const { data } = await axios.get<PersonsWithName>(`/api/events/get`);
  return data;
};
