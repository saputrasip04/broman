import { z } from "zod";

export const loginSchema = z.object({
  identifier: z
    .string()
    .min(3, "Identifier (NIS / NIP / Email) minimal 3 karakter"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const userProfileSchema = z.object({
  id: z.string().uuid().optional(),
  full_name: z.string().min(2, "Nama lengkap wajib diisi"),
  role: z.enum(["super_admin", "guru", "murid"]),
  identifier: z.string().optional().nullable(),
  email: z.string().email("Format email tidak valid").optional().nullable(),
  is_active: z.boolean().default(true),
});

export type UserProfileInput = z.infer<typeof userProfileSchema>;
