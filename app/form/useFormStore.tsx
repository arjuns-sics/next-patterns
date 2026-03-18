import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Step = 1 | 2 | 3;

const stepVariant = {
  1: 'stepOne',
  2: 'stepTwo',
  3: 'stepThree',
} as const;

type FormStore = {
  stepOne: any;
  stepTwo: any;
  stepThree: any;
  setData: (params: { step: Step; data: any }) => void;
};

const useFormStore = create<FormStore>()(
  devtools((set) => ({
    stepOne: null,
    stepTwo: null,
    stepThree: null,

    setData: ({ step, data }) =>
      set((state) => ({
        ...state,
        [stepVariant[step]]: data,
      })),
  }))
);

export default useFormStore;