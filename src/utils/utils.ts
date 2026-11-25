export const slugify = (s: string) =>
    s.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replaceAll(/(^-|-$)/g, "");

export const formatMonthYear = (d: Date) =>
    d.toLocaleDateString("en-GB", {month: "long", year: "numeric"});