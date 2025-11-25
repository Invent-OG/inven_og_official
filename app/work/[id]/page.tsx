import WorkDetailsContent from "@/components/WorkPages/WorkDetailsContent";
import { projectsData } from "@/data/projectsData";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === Number(id));

  return {
    title: project ? `${project.title} | Work` : "Project Not Found",
    description: project?.description || "Project details",
  };
}

export default function ProjectDetailsPage() {
  return <WorkDetailsContent />;
}
