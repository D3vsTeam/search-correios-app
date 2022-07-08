import { AxiosResponse } from "axios";
import { CepResponse } from "../model/Cep";
import { api } from "./api";

export async function getEndereco(cep: string): Promise<AxiosResponse<CepResponse>>  {
  return await api.get(`${cep}/json/`)
}