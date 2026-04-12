"use client";

import { useEffect, useState, use } from "react";
import { getBlogPostById, type BlogPost } from "@/lib/supabase";
import { BlogForm } from "../../components/blog-form";

export default function EditBlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPost() {
            try {
                const data = await getBlogPostById(id);
                if (!data) {
                    setError("Post not found.");
                    return;
                }
                setPost(data);
            } catch {
                setError("Failed to load post.");
            } finally {
                setLoading(false);
            }
        }
        loadPost();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
                <p className="text-sm text-red-700">{error || "Post not found."}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Edit Post
                </h1>
                <p className="mt-1 text-sm text-tertiary">Update &quot;{post.title}&quot;</p>
            </div>
            <BlogForm post={post} />
        </div>
    );
}
