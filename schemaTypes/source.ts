// studio-safari/schemaTypes/source.ts
//
// A cited source document (chart page or devaluation notice) — design §4.1.
//
// Single source of truth for authority (M1): the `authority` enum's
// options.list is DERIVED from AUTHORITY_OPTIONS, which lives in the
// dependency-free lib/authority.ts in the Next.js app. The standalone Studio
// imports that same file by relative path, so the schema enum and the solver's
// precedence rank map can never drift even across the app/Studio package
// boundary. Do not replace this with a literal string list.

import { defineType, defineField } from "sanity";
import { AUTHORITY_OPTIONS } from "../../safari/lib/authority";

export const source = defineType({
  name: "source",
  title: "Source",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authority",
      title: "Authority",
      type: "string",
      // DERIVED, not hand-copied (M1): keep in sync with AUTHORITY_RANK.
      options: {
        list: AUTHORITY_OPTIONS.map((v) => ({ title: v, value: v })),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedDate",
      title: "Published Date",
      type: "datetime",
      description: "When the source was published/issued.",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description:
        "Synthetic placeholder URL. Must be a valid absolute URL (uses the reserved example.invalid host in the seed).",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "synthetic",
      title: "Synthetic",
      type: "boolean",
      description: "Synthetic data flag (always true for seeded docs).",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
});
