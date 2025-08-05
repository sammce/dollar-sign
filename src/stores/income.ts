import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { currencies } from "@/constants";
import type { Currency, Month } from "@/constants";

type IncomeStore = {
  monthlyIncome: number;
  currency: Currency;
  lastCalculatedMonth: Month | null;
  setMonthlyIncome: (monthlyIncome: number) => void;
};

const useIncomeStore = create<IncomeStore>()(
  persist(
    (set) => ({
      monthlyIncome: 0,
      currency: "EUR" as keyof typeof currencies,
      lastCalculatedMonth: null,
      setMonthlyIncome: (monthlyIncome: number) => set({ monthlyIncome }),
    }),
    {
      name: "budget-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export { type IncomeStore, useIncomeStore };
