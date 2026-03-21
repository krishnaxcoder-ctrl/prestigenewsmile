export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export interface Database {
    public: {
        Tables: {
            products: {
                Row: {
                    id: string;
                    slug: string;
                    name: string;
                    category: string;
                    price: number;
                    original_price: number | null;
                    rating: number;
                    reviews: number;
                    in_stock: boolean;
                    description: string | null;
                    images: string[];
                    badges: string[];
                    sizes: string[];
                    colors: string[];
                    features: string[];
                    benefits: string | null;
                    additional_info: Json;
                    customer_reviews: Json;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    slug: string;
                    name: string;
                    category: string;
                    price: number;
                    original_price?: number | null;
                    rating?: number;
                    reviews?: number;
                    in_stock?: boolean;
                    description?: string | null;
                    images?: string[];
                    badges?: string[];
                    sizes?: string[];
                    colors?: string[];
                    features?: string[];
                    benefits?: string | null;
                    additional_info?: Json;
                    customer_reviews?: Json;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    slug?: string;
                    name?: string;
                    category?: string;
                    price?: number;
                    original_price?: number | null;
                    rating?: number;
                    reviews?: number;
                    in_stock?: boolean;
                    description?: string | null;
                    images?: string[];
                    badges?: string[];
                    sizes?: string[];
                    colors?: string[];
                    features?: string[];
                    benefits?: string | null;
                    additional_info?: Json;
                    customer_reviews?: Json;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            cart_items: {
                Row: {
                    id: string;
                    user_id: string | null;
                    session_id: string | null;
                    product_id: string;
                    quantity: number;
                    size: string | null;
                    color: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    session_id?: string | null;
                    product_id: string;
                    quantity?: number;
                    size?: string | null;
                    color?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string | null;
                    session_id?: string | null;
                    product_id?: string;
                    quantity?: number;
                    size?: string | null;
                    color?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            orders: {
                Row: {
                    id: string;
                    order_number: string;
                    user_id: string | null;
                    email: string;
                    first_name: string;
                    last_name: string;
                    address: string;
                    apartment: string | null;
                    city: string;
                    country: string;
                    postal_code: string;
                    phone: string | null;
                    shipping_method: string;
                    payment_method: string;
                    status: string;
                    subtotal: number;
                    shipping_cost: number;
                    total: number;
                    tracking_number: string | null;
                    delivery_date: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    order_number: string;
                    user_id?: string | null;
                    email: string;
                    first_name: string;
                    last_name: string;
                    address: string;
                    apartment?: string | null;
                    city: string;
                    country: string;
                    postal_code: string;
                    phone?: string | null;
                    shipping_method?: string;
                    payment_method?: string;
                    status?: string;
                    subtotal: number;
                    shipping_cost?: number;
                    total: number;
                    tracking_number?: string | null;
                    delivery_date?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    order_number?: string;
                    user_id?: string | null;
                    email?: string;
                    first_name?: string;
                    last_name?: string;
                    address?: string;
                    apartment?: string | null;
                    city?: string;
                    country?: string;
                    postal_code?: string;
                    phone?: string | null;
                    shipping_method?: string;
                    payment_method?: string;
                    status?: string;
                    subtotal?: number;
                    shipping_cost?: number;
                    total?: number;
                    tracking_number?: string | null;
                    delivery_date?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            order_items: {
                Row: {
                    id: string;
                    order_id: string;
                    product_id: string | null;
                    name: string;
                    price: number;
                    quantity: number;
                    size: string | null;
                    color: string | null;
                    image: string | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    order_id: string;
                    product_id?: string | null;
                    name: string;
                    price: number;
                    quantity: number;
                    size?: string | null;
                    color?: string | null;
                    image?: string | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    order_id?: string;
                    product_id?: string | null;
                    name?: string;
                    price?: number;
                    quantity?: number;
                    size?: string | null;
                    color?: string | null;
                    image?: string | null;
                    created_at?: string;
                };
            };
        };
        Views: {};
        Functions: {};
        Enums: {};
    };
}
