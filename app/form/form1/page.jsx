'use client';

import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { stepOneSchema } from '../zod';
import useFormStore from '../useFormStore';

export default function StepOnePage() {
  const router = useRouter();
  const { stepOne, setData } = useFormStore();

  const methods = useForm({
    mode: 'onTouched',
    resolver: zodResolver(stepOneSchema),
    defaultValues: stepOne || {},
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    setData({ step: 1, data });
    router.push('/form/form2');
  };

  return (
    <main style={{ padding: '2rem', maxWidth: 400 }}>
      <h1>Step 1</h1>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => router.push('/')}>← Back</button>
        <button onClick={() => router.push('/form/form2')}>
          Next →
        </button>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '2rem' }}>
          
          <div>
            <label>Name</label>
            <input {...register('name')} />
            <p style={{color:"red"}}>{errors.name?.message}</p>
          </div>

          <div>
            <label>Email</label>
            <input type="email" {...register('email')} />
            <p style={{color:"red"}}>{errors.email?.message}</p>
          </div>

          <div>
            <label>Password</label>
            <input type="password" {...register('password')} />
            <p style={{color:"red"}}>{errors.password?.message}</p>
          </div>

          <div>
            <label>Age</label>
            <input type="number" {...register('age')} />
            <p style={{color:"red"}}>{errors.age?.message}</p>
          </div>

          <div>
            <label>Phone</label>
            <input {...register('phone')} placeholder="+62..." />
            <p style={{color:"red"}}>{errors.phone?.message}</p>
          </div>

          <button type="submit" style={{ marginTop: '1rem' }}>
            Next
          </button>
        </form>
      </FormProvider>
    </main>
  );
}