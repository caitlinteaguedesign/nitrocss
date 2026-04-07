const baseUrl = import.meta.env.BASE_URL;

export const SITE_TITLE = "NitroCSS";
export const SITE_DESCRIPTION =
  "A CSS Framework for the convience of non-UX Engineers by a UX Engineer";
export const SVG_PATH = `${baseUrl}img/core-icons.svg`;
export const ICONIC_PATH = `${baseUrl}img/open-iconic-sprites.svg`;

export const SIDEBAR_SECTIONS = {
  INTRO: "Introduction",
  LAYOUT: "Layout",
  CONTENT: "Content",
  COMPONENTS: "Components",
  FEATURES: "Interactive Features",
} as const;
