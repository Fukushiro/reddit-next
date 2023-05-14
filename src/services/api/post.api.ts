import { PostData } from "../../types/post.types";
import { api } from "../api";
import { RetornoPadrao, falhaSemRetorno, success } from "./default.api";
import { AxiosResponse } from "axios";
export async function getPosts(): Promise<RetornoPadrao<Array<PostData>>> {
  try {
    const response: AxiosResponse<any, any> = await api.get("/posts");

    await new Promise((res) => setTimeout(() => res("p1"), 1000)); //load fake

    return success(response, "Sucesso");
  } catch (e: any) {
    return falhaSemRetorno(`${e}`);
  }
}
