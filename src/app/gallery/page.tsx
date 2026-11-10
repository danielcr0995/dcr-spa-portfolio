import React from 'react'

import type { Metadata } from "next";
import { profile } from '@/lib/cv';
import { PageIntro } from '@/components/organisms/page-intro/PageIntro';
import { GalleryView } from '@/components/organisms/gallery-view/GalleryView';

const description = "A picture grid of the work I have done — filter by type.";

export const metadata: Metadata = {
  title: "Gallery",
  description,
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Gallery — ${profile.name}`,
    description,
    type: "website",
    url: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <div>
      <PageIntro eyebrow="Selected work" title="Gallery">
        Everything I have built or contributed to. Tap a label to filter.
      </PageIntro>
      <GalleryView />
    </div>
  );
}