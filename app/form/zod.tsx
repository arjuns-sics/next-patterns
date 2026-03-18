import { z } from 'zod';

//
// STEP 1
//
export const stepOneSchema = z.object({
  name: z.string().min(1, 'Name is required'),

  email: z.string().email('Invalid email'),

  password: z.string().min(6, 'Password must be at least 6 characters'),

  age: z.coerce.number().min(1, 'Age is required'),

  phone: z
    .string()
    .min(10, 'Phone must be at least 10 digits')
    .regex(/^\+?\d+$/, 'Invalid phone number'),
});

export type StepOneData = z.infer<typeof stepOneSchema>;

//
// 🔧 Helper: safely convert FileList
//
const toFileArray = (files: unknown): File[] => {
  if (files instanceof FileList) {
    return Array.from(files);
  }
  return [];
};

//
// STEP 2
//
export const stepTwoSchema = z.object({
  score_1: z.coerce.number().min(0, 'Score 1 is required'),

  score_2: z.coerce.number().min(0, 'Score 2 is required'),

  score_3: z.coerce.number().min(0, 'Score 3 is required'),

  score_file: z
    .unknown()
    .refine((files) => toFileArray(files).length > 0, {
      message: 'At least one file is required',
    })
    .refine((files) => toFileArray(files).length <= 3, {
      message: 'Maximum 3 files allowed',
    })
    .refine(
      (files) =>
        toFileArray(files).every((file) =>
          ['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)
        ),
      {
        message: 'Only PNG, JPG, JPEG allowed',
      }
    ),

  identity_card: z
    .unknown()
    .refine((files) => toFileArray(files).length === 1, {
      message: 'Exactly 1 file is required',
    })
    .refine(
      (files) =>
        toFileArray(files).every(
          (file) => file.type === 'application/pdf'
        ),
      {
        message: 'Only PDF allowed',
      }
    ),
});

export type StepTwoData = z.infer<typeof stepTwoSchema>;

//
// STEP 3
//
export const stepThreeSchema = z.object({
  birth_date: z.string().min(1, 'Birth date is required'),

  gender: z.enum(['L', 'P']).refine((val) => val !== undefined, {
  message: 'Gender is required',
}),

  lat: z.coerce.number(),
  lng: z.coerce.number(),
});

export type StepThreeData = z.infer<typeof stepThreeSchema>;

//
// FINAL SCHEMA
//
export const finalSchema = stepOneSchema
  .merge(stepTwoSchema)
  .merge(stepThreeSchema);

export type FinalFormData = z.infer<typeof finalSchema>;