import ProjectDetails from "@/components/ProjectPages/ProjectDetails";
import React from "react";
import { Metadata } from "next";
import { projectsData } from "@/data/projectsData";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === Number(id));

  return {
    title: project ? `${project.title} | Projects` : "Project Not Found",
    description: project?.description || "Project details",
  };
}

function page() {
  return (
    <>
      <ProjectDetails />
    </>
  );
}

export default page;
