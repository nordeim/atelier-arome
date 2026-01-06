import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  latinName: string;
  price: number;
  quantity: number;
  variant?: string;
  addedAt?: string;
}

export interface CartState {
  items: CartItem[];
  cartDrawerOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCartDrawer: () => void;
  getCartTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      cartDrawerOpen: false,

      addToCart: (item) => {
        const existingItem = get().items.find((i) => i.id === item.id);
        
        if (existingItem) {
          set((state) => ({
            items: state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          }));
        } else {
          set((state) => ({
            items: [...state.items, { ...item, quantity: item.quantity, addedAt: new Date().toISOString() }],
          }));
        }
      },

      removeFromCart: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(id);
          return;
        }

        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      toggleCartDrawer: () => {
        set((state) => ({ cartDrawerOpen: !state.cartDrawerOpen }));
      },

      getCartTotal: () => {
        return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    }),
    {
      name: 'atelier-arome-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
