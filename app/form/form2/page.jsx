'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { stepTwoSchema } from '../zod';
import useFormStore from '../useFormStore';

export default function StepTwoPage() {
  const router = useRouter();
  const { stepOne, stepTwo, setData } = useFormStore();

const hasRedirected = useRef(false);

useEffect(() => {
  if (!stepOne && !hasRedirected.current) {
    hasRedirected.current = true;

    alert('Please fill step one first');
    router.push('/form/form1');
  }
}, [stepOne, router]);

  const methods = useForm({
    mode: 'onTouched',
    resolver: zodResolver(stepTwoSchema),
    defaultValues: stepTwo || {},
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);

    setData({ step: 2, data });
    router.push('/form/form3');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 500 }}>
      <h1>Step 2</h1>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => router.push('/form/form1')}>
          ← Back
        </button>
        <button onClick={() => router.push('/form/form3')}>
          Next →
        </button>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>

          <div>
            <label>Score 1</label>
            <input type="number" {...register('score_1')} />
            <p>{errors.score_1?.message}</p>
          </div>

          <div>
            <label>Score 2</label>
            <input type="number" {...register('score_2')} />
            <p>{errors.score_2?.message}</p>
          </div>

          <div>
            <label>Score 3</label>
            <input type="number" {...register('score_3')} />
            <p>{errors.score_3?.message}</p>
          </div>

          <div>
            <label>Score File (max 3 images)</label>
            <input
              type="file"
              multiple
              accept="image/png, image/jpeg"
              {...register('score_file')}
            />
            <p>{errors.score_file?.message}</p>
          </div>

          <div>
            <label>Identity Card (PDF only)</label>
            <input
              type="file"
              accept="application/pdf"
              {...register('identity_card')}
            />
            <p>{errors.identity_card?.message}</p>
          </div>

          <button type="submit" style={{ marginTop: '1rem' }}>
            Next
          </button>
        </form>
      </FormProvider>
    </main>
  );
}