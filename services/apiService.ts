import axios from "axios";
import { PersonsWithName } from "../pages/api/get";

export const createPerson = async (name: string) => {
  await axios.post("http://localhost:3000/api/create", { name });
};

export const getPersons = async () => {
  const { data } = await axios.get<PersonsWithName>(
    "http://localhost:3000/api/get"
  );
  return data;
};
