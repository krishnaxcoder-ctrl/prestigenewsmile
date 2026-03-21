export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      addresses: {
        Row: {
          address: string
          apartment: string | null
          city: string
          country: string
          created_at: string | null
          first_name: string
          id: string
          is_default: boolean | null
          label: string
          last_name: string
          phone: string | null
          postal_code: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          address: string
          apartment?: string | null
          city: string
          country?: string
          created_at?: string | null
          first_name: string
          id?: string
          is_default?: boolean | null
          label?: string
          last_name: string
          phone?: string | null
          postal_code: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          address?: string
          apartment?: string | null
          city?: string
          country?: string
          created_at?: string | null
          first_name?: string
          id?: string
          is_default?: boolean | null
          label?: string
          last_name?: string
          phone?: string | null
          postal_code?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          product_id: string | null
          quantity: number
          session_id: string | null
          size: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          session_id?: string | null
          size?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          product_id?: string | null
          quantity?: number
          session_id?: string | null
          size?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string
          apartment: string | null
          city: string
          country: string
          created_at: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          payment_method: string | null
          phone: string | null
          postal_code: string
          session_id: string
          shipping_method: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address: string
          apartment?: string | null
          city: string
          country?: string
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          payment_method?: string | null
          phone?: string | null
          postal_code: string
          session_id: string
          shipping_method?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string
          apartment?: string | null
          city?: string
          country?: string
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          payment_method?: string | null
          phone?: string | null
          postal_code?: string
          session_id?: string
          shipping_method?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          color: string | null
          created_at: string | null
          id: string
          image: string | null
          name: string
          order_id: string | null
          price: number
          product_id: string | null
          quantity: number
          size: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          id?: string
          image?: string | null
          name: string
          order_id?: string | null
          price: number
          product_id?: string | null
          quantity: number
          size?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          id?: string
          image?: string | null
          name?: string
          order_id?: string | null
          price?: number
          product_id?: string | null
          quantity?: number
          size?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          address: string
          apartment: string | null
          city: string
          country: string
          created_at: string | null
          delivery_date: string | null
          email: string
          first_name: string
          id: string
          last_name: string
          order_number: string
          payment_method: string
          phone: string | null
          postal_code: string
          shipping_cost: number
          shipping_method: string
          status: string
          subtotal: number
          total: number
          tracking_number: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address: string
          apartment?: string | null
          city: string
          country: string
          created_at?: string | null
          delivery_date?: string | null
          email: string
          first_name: string
          id?: string
          last_name: string
          order_number: string
          payment_method?: string
          phone?: string | null
          postal_code: string
          shipping_cost?: number
          shipping_method?: string
          status?: string
          subtotal: number
          total: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string
          apartment?: string | null
          city?: string
          country?: string
          created_at?: string | null
          delivery_date?: string | null
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          order_number?: string
          payment_method?: string
          phone?: string | null
          postal_code?: string
          shipping_cost?: number
          shipping_method?: string
          status?: string
          subtotal?: number
          total?: number
          tracking_number?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          additional_info: Json | null
          badges: string[] | null
          benefits: string | null
          category: string
          colors: string[] | null
          created_at: string | null
          customer_reviews: Json | null
          description: string | null
          features: string[] | null
          id: string
          images: string[] | null
          in_stock: boolean | null
          name: string
          original_price: number | null
          price: number
          rating: number | null
          reviews: number | null
          sizes: string[] | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          additional_info?: Json | null
          badges?: string[] | null
          benefits?: string | null
          category: string
          colors?: string[] | null
          created_at?: string | null
          customer_reviews?: Json | null
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          in_stock?: boolean | null
          name: string
          original_price?: number | null
          price: number
          rating?: number | null
          reviews?: number | null
          sizes?: string[] | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          additional_info?: Json | null
          badges?: string[] | null
          benefits?: string | null
          category?: string
          colors?: string[] | null
          created_at?: string | null
          customer_reviews?: Json | null
          description?: string | null
          features?: string[] | null
          id?: string
          images?: string[] | null
          in_stock?: boolean | null
          name?: string
          original_price?: number | null
          price?: number
          rating?: number | null
          reviews?: number | null
          sizes?: string[] | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      wishlist: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
