import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { Info, Spinner } from "@features/ui/";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();
  const manuallyRefetch = () => {
    refetch;
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return <Info onClick={manuallyRefetch} />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
