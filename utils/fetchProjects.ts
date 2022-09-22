import { Projects } from "../typings";

export const fetchProjects = async () => {
  const res = await fetch(`${process.env.VERCEL_URL}/api/getProjects`);

  const data = await res.json();
  const projects: Projects[] = data.projects;

  return projects;
};
