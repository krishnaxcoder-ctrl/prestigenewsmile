import { createClient } from "@supabase/supabase-js";
import type { Database } from "./database.types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Auth types
export interface AuthUser {
    id: string;
    email: string;
    user_metadata: {
        first_name?: string;
        last_name?: string;
    };
}

// Auth functions
export async function signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName,
            },
        },
    });

    if (error) throw error;
    return data;
}

export async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) throw error;
    return data;
}

export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
}

export async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
}

export async function getSession() {
    const { data: { session }, error } = await supabase.auth.getSession();
    if (error) throw error;
    return session;
}

// Product types
export interface Product {
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
    additional_info: {
        weight?: string;
        dimensions?: string;
        ingredients?: string;
        shelfLife?: string;
        madeIn?: string;
        skinType?: string;
        usage?: string;
    };
    customer_reviews: {
        name: string;
        rating: number;
        date: string;
        title: string;
        comment: string;
        avatar: string;
        verified: boolean;
    }[];
}

export interface CartItem {
    id: string;
    product_id: string;
    quantity: number;
    size: string | null;
    color: string | null;
    session_id: string | null;
    product?: Product;
}

export interface Order {
    id: string;
    order_number: string;
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
    status: "processing" | "shipped" | "delivered" | "cancelled";
    subtotal: number;
    shipping_cost: number;
    total: number;
    tracking_number: string | null;
    delivery_date: string | null;
    created_at: string;
}

export interface OrderItem {
    id: string;
    order_id: string;
    product_id: string | null;
    name: string;
    price: number;
    quantity: number;
    size: string | null;
    color: string | null;
    image: string | null;
}

// API functions
export async function getProducts() {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Product[];
}

export async function getProductBySlug(slug: string) {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) throw error;
    return data as Product;
}

export async function getProductsByCategory(category: string) {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category);

    if (error) throw error;
    return data as Product[];
}

// Cart functions
export async function getCartItems(sessionId: string) {
    const { data, error } = await supabase
        .from("cart_items")
        .select(`
            *,
            product:products(*)
        `)
        .eq("session_id", sessionId);

    if (error) throw error;
    return data;
}

export async function addToCart(
    sessionId: string,
    productId: string,
    quantity: number,
    size?: string,
    color?: string
) {
    // Validate session ID format (required by RLS)
    if (!sessionId || !sessionId.startsWith("session_") || sessionId.length <= 20) {
        throw new Error("Invalid session ID");
    }

    // Validate quantity (required by RLS)
    if (quantity <= 0 || quantity > 10) {
        throw new Error("Invalid quantity");
    }

    // Check if item already exists
    const { data: existing } = await supabase
        .from("cart_items")
        .select("*")
        .eq("session_id", sessionId)
        .eq("product_id", productId)
        .eq("size", size || "")
        .single();

    if (existing) {
        // Update quantity (max 99 per RLS)
        const newQuantity = Math.min(existing.quantity + quantity, 99);
        const { error } = await supabase
            .from("cart_items")
            .update({ quantity: newQuantity })
            .eq("id", existing.id)
            .eq("session_id", sessionId); // Double-check session ownership
        if (error) throw error;
    } else {
        // Insert new item
        const { error } = await supabase.from("cart_items").insert({
            session_id: sessionId,
            product_id: productId,
            quantity,
            size: size || null,
            color: color || null,
        });
        if (error) throw error;
    }
}

export async function updateCartItemQuantity(itemId: string, quantity: number) {
    const { error } = await supabase
        .from("cart_items")
        .update({ quantity })
        .eq("id", itemId);

    if (error) throw error;
}

export async function removeFromCart(itemId: string) {
    const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("id", itemId);

    if (error) throw error;
}

export async function clearCart(sessionId: string) {
    const { error } = await supabase
        .from("cart_items")
        .delete()
        .eq("session_id", sessionId);

    if (error) throw error;
}

// Order functions
export async function createOrder(
    orderData: Omit<Order, "id" | "order_number" | "created_at">,
    items: Omit<OrderItem, "id" | "order_id">[]
) {
    const orderNumber = `ORD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    const { data: order, error: orderError } = await supabase
        .from("orders")
        .insert({
            ...orderData,
            order_number: orderNumber,
        })
        .select()
        .single();

    if (orderError) throw orderError;

    const orderItems = items.map((item) => ({
        ...item,
        order_id: order.id,
    }));

    const { error: itemsError } = await supabase
        .from("order_items")
        .insert(orderItems);

    if (itemsError) throw itemsError;

    return order;
}

export async function getOrders(email?: string) {
    let query = supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

    if (email) {
        query = query.eq("email", email);
    }

    const { data, error } = await query;

    if (error) throw error;
    return data as Order[];
}

export async function getOrderWithItems(orderId: string) {
    const { data: order, error: orderError } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId)
        .single();

    if (orderError) throw orderError;

    const { data: items, error: itemsError } = await supabase
        .from("order_items")
        .select("*")
        .eq("order_id", orderId);

    if (itemsError) throw itemsError;

    return { order: order as Order, items: items as OrderItem[] };
}

// Customer type
export interface Customer {
    id: string;
    session_id: string;
    email: string;
    first_name: string;
    last_name: string;
    address: string;
    apartment: string | null;
    city: string;
    postal_code: string;
    country: string;
    phone: string | null;
    shipping_method: string;
    payment_method: string;
    created_at: string;
    updated_at: string;
}

// Customer functions
export async function getCustomer(sessionId: string): Promise<Customer | null> {
    if (!sessionId || !sessionId.startsWith("session_") || sessionId.length <= 20) {
        return null;
    }

    const { data, error } = await supabase
        .from("customers")
        .select("*")
        .eq("session_id", sessionId)
        .single();

    if (error) {
        if (error.code === "PGRST116") return null; // Not found
        throw error;
    }
    return data as Customer;
}

export async function saveCustomer(
    sessionId: string,
    customerData: {
        email: string;
        first_name: string;
        last_name: string;
        address: string;
        apartment?: string;
        city: string;
        postal_code: string;
        country: string;
        phone?: string;
        shipping_method?: string;
        payment_method?: string;
    }
): Promise<Customer> {
    if (!sessionId || !sessionId.startsWith("session_") || sessionId.length <= 20) {
        throw new Error("Invalid session ID");
    }

    // Check if customer exists
    const existing = await getCustomer(sessionId);

    if (existing) {
        // Update existing customer
        const { data, error } = await supabase
            .from("customers")
            .update({
                ...customerData,
                apartment: customerData.apartment || null,
                phone: customerData.phone || null,
                shipping_method: customerData.shipping_method || existing.shipping_method,
                payment_method: customerData.payment_method || existing.payment_method,
                updated_at: new Date().toISOString(),
            })
            .eq("session_id", sessionId)
            .select()
            .single();

        if (error) throw error;
        return data as Customer;
    } else {
        // Insert new customer
        const { data, error } = await supabase
            .from("customers")
            .insert({
                session_id: sessionId,
                ...customerData,
                apartment: customerData.apartment || null,
                phone: customerData.phone || null,
                shipping_method: customerData.shipping_method || "standard",
                payment_method: customerData.payment_method || "twint",
            })
            .select()
            .single();

        if (error) throw error;
        return data as Customer;
    }
}

// Session ID helper
export function getSessionId(): string {
    if (typeof window === "undefined") return "";

    let sessionId = localStorage.getItem("cart_session_id");
    if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
        localStorage.setItem("cart_session_id", sessionId);
    }
    return sessionId;
}
