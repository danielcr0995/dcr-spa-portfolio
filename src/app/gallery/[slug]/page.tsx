import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {profile} from "@/lib/cv";
import {ProjectDetail} from "@/components/organisms/project-detail/ProjectDetail";
import {slugify} from "@/utils/utils";
import {projects} from "@/lib/projects";
import {Suspense} from "react";


type Props = {
  params: Promise<{slug: string}>;
};


export function generateStaticParams() {
  return projects.map((p) => ({slug: slugify(p.name)}));
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: `${project?.name ?? "Project"} — ${profile.name}`,
    description: project?.description,
  };
}

export default function SingleProjectPage({params}: Readonly<Props>) {
  return (
      <Suspense fallback={<div style={{minHeight: "60vh"}} />}>
        <ProjectLoader params={params} />
      </Suspense>
  );
}
async function ProjectLoader({params}: Readonly<Props>) {
  const {slug} = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return <ProjectDetail project={project} />;
}