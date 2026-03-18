"use client";
import { useRouter } from 'next/navigation';
export default function FormIntro() {
    const router = useRouter();
    return (
        <div>
            <h1>Multi Step Form</h1>
            <p>This is a multi step form built with Next.js 13. It uses Zustand for state management and server actions for form submission.</p>
            <button onClick={() => router.push('/form/form1')} style={{ marginTop: '1rem' }}>
            Next
          </button>
        </div>
    )
}