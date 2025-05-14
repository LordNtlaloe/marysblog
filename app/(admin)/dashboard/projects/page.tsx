import { useProjects } from "@/hooks/use-project";
    import ProjectTable from "@/components/projects/ProjectTable";

export default function ProjectsPage() {
    const { data: projects, isLoading } = useProjects();

    if (isLoading) return <p>Loading...</p>;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Projects</h1>
            <ProjectTable projects={projects} />
        </div>
    );
}
