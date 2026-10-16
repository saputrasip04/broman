import { z } from "zod";

export const flagScopeSchema = z.enum(["global", "fase", "bab", "role"]);

export const toggleFeatureFlagSchema = z.object({
  key: z.string().min(1, "Key fitur wajib diisi"),
  scope: flagScopeSchema.default("global"),
  scope_ref: z.string().optional().nullable(),
  is_enabled: z.boolean(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export type ToggleFeatureFlagInput = z.infer<typeof toggleFeatureFlagSchema>;
