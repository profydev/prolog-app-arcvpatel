import { axios } from "./axios";
import type { Project } from "./projects.types";

const ENDPOINT = "/project";

export async function getProjects(): Promise<Project[]> {
  const { data } = await axios.get<Project[]>(ENDPOINT);
  return data;
}
