'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { stepThreeSchema } from '../zod';
import useFormStore from '../useFormStore';

export default function StepThreePage() {
  const router = useRouter();
  const { stepOne, stepTwo, stepThree, setData } = useFormStore();

  // Guard steps
  useEffect(() => {
    if (!stepOne) {
      alert('Please fill step one first');
      router.push('/form/form1');
    } else if (!stepTwo) {
      alert('Please fill step two first');
      router.push('/form/form2');
    }
  }, [stepOne, stepTwo, router]);

  const methods = useForm({
    mode: 'onTouched',
    resolver: zodResolver(stepThreeSchema),
    defaultValues: stepThree || {
      lat: -6.1754,
      lng: 106.8272,
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('FINAL DATA:', {
      stepOne,
      stepTwo,
      stepThree: data,
    });

    setData({ step: 3, data });

    // 👉 FINAL SUBMIT (no recap)
    alert('Form submitted successfully!');

    // optional reset or redirect
    router.push('/');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 500 }}>
      <h1>Step 3 (Final)</h1>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => router.push('/form/form2')}>
          ← Back
        </button>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>

          <div>
            <label>Birth Date</label>
            <input type="date" {...register('birth_date')} />
            <p>{errors.birth_date?.message}</p>
          </div>

          <div>
            <label>Gender</label>
            <select {...register('gender')}>
              <option value="">Select gender</option>
              <option value="L">Male</option>
              <option value="P">Female</option>
            </select>
            <p>{errors.gender?.message}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
              <label>Latitude</label>
              <input type="number" step="any" {...register('lat')} />
              <p>{errors.lat?.message}</p>
            </div>

            <div>
              <label>Longitude</label>
              <input type="number" step="any" {...register('lng')} />
              <p>{errors.lng?.message}</p>
            </div>
          </div>

          {/* Simple map replacement note */}
          <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
            (Map removed — you can integrate Leaflet/Google Maps later if needed)
          </p>

          <button type="submit" style={{ marginTop: '1rem' }}>
            Submit
          </button>
        </form>
      </FormProvider>
    </main>
  );
}