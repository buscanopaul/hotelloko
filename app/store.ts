import { create } from 'zustand';

export const useSalesStore = create((set) => ({
    sales: [],
    addSale: (sale) => set((state) => ({ sales: [sale] }))
  }));
  
