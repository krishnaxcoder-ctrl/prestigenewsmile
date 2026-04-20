import { createClient } from "@supabase/supabase-js";
import type { Database, Json } from "./database.types";

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

// Profile types
export interface Profile {
    id: string;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    avatar_url: string | null;
    is_admin: boolean | null;
    created_at: string;
    updated_at: string;
}

// Profile functions
export async function getProfile(userId: string): Promise<Profile | null> {
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

    if (error) {
        if (error.code === "PGRST116") return null;
        throw error;
    }
    return data as Profile;
}

export async function updateProfile(
    userId: string,
    updates: Partial<Omit<Profile, "id" | "created_at" | "updated_at">>
): Promise<Profile> {
    const { data, error } = await supabase
        .from("profiles")
        .update({
            ...updates,
            updated_at: new Date().toISOString(),
        })
        .eq("id", userId)
        .select()
        .single();

    if (error) throw error;
    return data as Profile;
}

export async function getUserOrders(userId: string) {
    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Order[];
}

// Product types
export interface ProductReview {
    name: string;
    rating: number;
    date: string;
    title: string;
    comment: string;
    avatar: string;
    verified: boolean;
}

export interface ProductAdditionalInfo {
    weight?: string;
    dimensions?: string;
    ingredients?: string;
    shelfLife?: string;
    madeIn?: string;
    skinType?: string;
    usage?: string;
    size?: string;
    type?: string;
    key_ingredient?: string;
    formulation?: string;
    texture?: string;
    flavor?: string;
    skin_type?: string;
    shelf_life?: string;
    packaging?: string;
    storage?: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    category: string;
    price: number;
    original_price: number | null;
    rating: number | null;
    reviews: number | null;
    in_stock: boolean | null;
    description: string | null;
    images: string[] | null;
    badges: string[] | null;
    sizes: string[] | null;
    colors: string[] | null;
    features: string[] | null;
    benefits: string | null;
    additional_info: ProductAdditionalInfo | null;
    customer_reviews: ProductReview[] | null;
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
    return data as unknown as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single();

    if (error) {
        if (error.code === "PGRST116") return null; // Not found
        throw error;
    }
    return data as unknown as Product;
}

export async function getProductsByCategory(category: string) {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", category);

    if (error) throw error;
    return data as unknown as Product[];
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
): Promise<Order> {
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

    return order as Order;
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

// Wishlist types
export interface WishlistItem {
    id: string;
    user_id: string;
    product_id: string;
    created_at: string;
    product?: Product;
}

// Wishlist functions
export async function getWishlist(userId: string): Promise<WishlistItem[]> {
    const { data, error } = await supabase
        .from("wishlist")
        .select(`
            *,
            product:products(*)
        `)
        .eq("user_id", userId)
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data as unknown as WishlistItem[];
}

export async function addToWishlist(userId: string, productId: string): Promise<void> {
    const { error } = await supabase
        .from("wishlist")
        .insert({ user_id: userId, product_id: productId });

    if (error && error.code !== "23505") throw error; // Ignore duplicate key error
}

export async function removeFromWishlist(userId: string, productId: string): Promise<void> {
    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", userId)
        .eq("product_id", productId);

    if (error) throw error;
}

export async function clearWishlist(userId: string): Promise<void> {
    const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", userId);

    if (error) throw error;
}

export async function isInWishlist(userId: string, productId: string): Promise<boolean> {
    const { data, error } = await supabase
        .from("wishlist")
        .select("id")
        .eq("user_id", userId)
        .eq("product_id", productId)
        .single();

    if (error && error.code === "PGRST116") return false;
    if (error) throw error;
    return !!data;
}

// Address types
export interface Address {
    id: string;
    user_id: string;
    label: string;
    first_name: string;
    last_name: string;
    address: string;
    apartment: string | null;
    city: string;
    postal_code: string;
    country: string;
    phone: string | null;
    is_default: boolean;
    created_at: string;
    updated_at: string;
}

// Address functions
export async function getAddresses(userId: string): Promise<Address[]> {
    const { data, error } = await supabase
        .from("addresses")
        .select("*")
        .eq("user_id", userId)
        .order("is_default", { ascending: false })
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data as Address[];
}

export async function addAddress(
    userId: string,
    addressData: Omit<Address, "id" | "user_id" | "created_at" | "updated_at">
): Promise<Address> {
    // If this is the first address or is_default is true, update other addresses
    if (addressData.is_default) {
        await supabase
            .from("addresses")
            .update({ is_default: false })
            .eq("user_id", userId);
    }

    const { data, error } = await supabase
        .from("addresses")
        .insert({
            user_id: userId,
            ...addressData,
        })
        .select()
        .single();

    if (error) throw error;
    return data as Address;
}

export async function updateAddress(
    addressId: string,
    userId: string,
    updates: Partial<Omit<Address, "id" | "user_id" | "created_at">>
): Promise<Address> {
    // If setting as default, unset other defaults first
    if (updates.is_default) {
        await supabase
            .from("addresses")
            .update({ is_default: false })
            .eq("user_id", userId);
    }

    const { data, error } = await supabase
        .from("addresses")
        .update({
            ...updates,
            updated_at: new Date().toISOString(),
        })
        .eq("id", addressId)
        .eq("user_id", userId)
        .select()
        .single();

    if (error) throw error;
    return data as Address;
}

export async function deleteAddress(addressId: string, userId: string): Promise<void> {
    const { error } = await supabase
        .from("addresses")
        .delete()
        .eq("id", addressId)
        .eq("user_id", userId);

    if (error) throw error;
}

export async function setDefaultAddress(addressId: string, userId: string): Promise<void> {
    // Unset all defaults first
    await supabase
        .from("addresses")
        .update({ is_default: false })
        .eq("user_id", userId);

    // Set the new default
    const { error } = await supabase
        .from("addresses")
        .update({ is_default: true, updated_at: new Date().toISOString() })
        .eq("id", addressId)
        .eq("user_id", userId);

    if (error) throw error;
}

// Blog Post types
export interface BlogContentBlock {
    type: "paragraph" | "heading" | "list" | "callout";
    text: string;
    items?: string[];
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string | null;
    content: BlogContentBlock[];
    category: string;
    tags: string[] | null;
    hero_image: string | null;
    author: string;
    author_role: string | null;
    author_initials: string | null;
    read_time: string | null;
    status: "draft" | "published";
    seo_title: string | null;
    seo_description: string | null;
    seo_keywords: string[] | null;
    og_image: string | null;
    canonical_url: string | null;
    published_at: string | null;
    created_at: string | null;
    updated_at: string | null;
}

// Admin check
export async function checkIsAdmin(userId: string): Promise<boolean> {
    const { data, error } = await supabase
        .from("profiles")
        .select("is_admin")
        .eq("id", userId)
        .single();

    if (error) return false;
    return data?.is_admin === true;
}

// Blog functions - Public
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("status", "published")
        .order("published_at", { ascending: false });

    if (error) throw error;
    return (data ?? []) as unknown as BlogPost[];
}

export async function getPublishedBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();

    if (error) {
        if (error.code === "PGRST116") return null;
        throw error;
    }
    return data as unknown as BlogPost;
}

// Blog functions - Admin
export async function getAllBlogPosts(): Promise<BlogPost[]> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return (data ?? []) as unknown as BlogPost[];
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
    const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        if (error.code === "PGRST116") return null;
        throw error;
    }
    return data as unknown as BlogPost;
}

export async function createBlogPost(
    post: Omit<BlogPost, "id" | "created_at" | "updated_at">
): Promise<BlogPost> {
    const { data, error } = await supabase
        .from("blog_posts")
        .insert({
            slug: post.slug,
            title: post.title,
            excerpt: post.excerpt,
            content: post.content as unknown as Json,
            category: post.category,
            tags: post.tags,
            hero_image: post.hero_image,
            author: post.author,
            author_role: post.author_role,
            author_initials: post.author_initials,
            read_time: post.read_time,
            status: post.status,
            seo_title: post.seo_title,
            seo_description: post.seo_description,
            seo_keywords: post.seo_keywords,
            og_image: post.og_image,
            canonical_url: post.canonical_url,
            published_at: post.published_at,
        })
        .select()
        .single();

    if (error) throw error;
    return data as unknown as BlogPost;
}

export async function updateBlogPost(
    id: string,
    updates: Partial<Omit<BlogPost, "id" | "created_at">>
): Promise<BlogPost> {
    const updateData: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (updates.slug !== undefined) updateData.slug = updates.slug;
    if (updates.title !== undefined) updateData.title = updates.title;
    if (updates.excerpt !== undefined) updateData.excerpt = updates.excerpt;
    if (updates.content !== undefined) updateData.content = updates.content;
    if (updates.category !== undefined) updateData.category = updates.category;
    if (updates.tags !== undefined) updateData.tags = updates.tags;
    if (updates.hero_image !== undefined) updateData.hero_image = updates.hero_image;
    if (updates.author !== undefined) updateData.author = updates.author;
    if (updates.author_role !== undefined) updateData.author_role = updates.author_role;
    if (updates.author_initials !== undefined) updateData.author_initials = updates.author_initials;
    if (updates.read_time !== undefined) updateData.read_time = updates.read_time;
    if (updates.status !== undefined) updateData.status = updates.status;
    if (updates.seo_title !== undefined) updateData.seo_title = updates.seo_title;
    if (updates.seo_description !== undefined) updateData.seo_description = updates.seo_description;
    if (updates.seo_keywords !== undefined) updateData.seo_keywords = updates.seo_keywords;
    if (updates.og_image !== undefined) updateData.og_image = updates.og_image;
    if (updates.canonical_url !== undefined) updateData.canonical_url = updates.canonical_url;
    if (updates.published_at !== undefined) updateData.published_at = updates.published_at;

    const { data, error } = await supabase
        .from("blog_posts")
        .update(updateData as Database["public"]["Tables"]["blog_posts"]["Update"])
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data as unknown as BlogPost;
}

export async function deleteBlogPost(id: string): Promise<void> {
    const { error } = await supabase
        .from("blog_posts")
        .delete()
        .eq("id", id);

    if (error) throw error;
}

// ================= Admin: Products =================

export type ProductInput = Omit<Product, "id">;

export async function createProduct(input: ProductInput): Promise<Product> {
    const { data, error } = await supabase
        .from("products")
        .insert(input as never)
        .select()
        .single();

    if (error) throw error;
    return data as unknown as Product;
}

export async function updateProduct(id: string, input: Partial<ProductInput>): Promise<Product> {
    const { data, error } = await supabase
        .from("products")
        .update(input as never)
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data as unknown as Product;
}

export async function deleteProduct(id: string): Promise<void> {
    const { error } = await supabase.from("products").delete().eq("id", id);
    if (error) throw error;
}

export async function getProductById(id: string): Promise<Product | null> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        if (error.code === "PGRST116") return null;
        throw error;
    }
    return data as unknown as Product;
}

// ================= Admin: Orders =================

export async function getAllOrders(): Promise<Order[]> {
    const { data, error } = await supabase
        .from("orders")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return (data || []) as Order[];
}

export async function updateOrderStatus(
    orderId: string,
    status: Order["status"],
): Promise<Order> {
    const { data, error } = await supabase
        .from("orders")
        .update({ status } as never)
        .eq("id", orderId)
        .select()
        .single();

    if (error) throw error;
    return data as Order;
}

export async function updateOrderTracking(
    orderId: string,
    trackingNumber: string | null,
    deliveryDate?: string | null,
): Promise<Order> {
    const payload: Record<string, unknown> = { tracking_number: trackingNumber };
    if (deliveryDate !== undefined) payload.delivery_date = deliveryDate;

    const { data, error } = await supabase
        .from("orders")
        .update(payload as never)
        .eq("id", orderId)
        .select()
        .single();

    if (error) throw error;
    return data as Order;
}

// ================= Admin: Dashboard stats =================

export interface AdminOverviewStats {
    ordersTotal: number;
    ordersToday: number;
    ordersWeek: number;
    revenueTotal: number;
    revenueWeek: number;
    productsTotal: number;
    productsOutOfStock: number;
    customersTotal: number;
    ordersByStatus: Record<Order["status"], number>;
    recentOrders: Order[];
}

export async function getAdminOverviewStats(): Promise<AdminOverviewStats> {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const startOfWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const [ordersRes, productsRes, profilesRes] = await Promise.all([
        supabase.from("orders").select("*").order("created_at", { ascending: false }),
        supabase.from("products").select("id, in_stock"),
        supabase.from("profiles").select("id", { count: "exact", head: true }),
    ]);

    if (ordersRes.error) throw ordersRes.error;
    if (productsRes.error) throw productsRes.error;
    if (profilesRes.error) throw profilesRes.error;

    const orders = (ordersRes.data || []) as Order[];
    const products = (productsRes.data || []) as { id: string; in_stock: boolean | null }[];

    const ordersByStatus: Record<Order["status"], number> = {
        processing: 0,
        shipped: 0,
        delivered: 0,
        cancelled: 0,
    };

    let revenueTotal = 0;
    let revenueWeek = 0;
    let ordersToday = 0;
    let ordersWeek = 0;

    for (const o of orders) {
        ordersByStatus[o.status] = (ordersByStatus[o.status] || 0) + 1;
        const total = Number(o.total) || 0;
        if (o.status !== "cancelled") {
            revenueTotal += total;
            if (o.created_at >= startOfWeek) revenueWeek += total;
        }
        if (o.created_at >= startOfDay) ordersToday += 1;
        if (o.created_at >= startOfWeek) ordersWeek += 1;
    }

    return {
        ordersTotal: orders.length,
        ordersToday,
        ordersWeek,
        revenueTotal,
        revenueWeek,
        productsTotal: products.length,
        productsOutOfStock: products.filter((p) => p.in_stock === false).length,
        customersTotal: profilesRes.count || 0,
        ordersByStatus,
        recentOrders: orders.slice(0, 5),
    };
}
