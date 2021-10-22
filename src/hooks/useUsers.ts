import { useQuery } from "react-query";
import { api } from "../services/api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

const getUsers = async () : Promise<User[]> => {
  const { data } = await api.get<User[]>("/users");

  //@ts-ignore
  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return users;
};

export default function useUsers() {
  return useQuery("users", getUsers, {
    staleTime: 5000,
  });
}
