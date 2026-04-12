"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllBlogPosts, deleteBlogPost, type BlogPost } from "@/lib/supabase";

export default function AdminBlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [deleting, setDeleting] = useState<string | null>(null);

    async function loadPosts() {
        try {
            const data = await getAllBlogPosts();
            setPosts(data);
        } catch {
            // silently fail
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    async function handleDelete(id: string, title: string) {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
        setDeleting(id);
        try {
            await deleteBlogPost(id);
            setPosts((prev) => prev.filter((p) => p.id !== id));
        } catch {
            alert("Failed to delete post.");
        } finally {
            setDeleting(null);
        }
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
            </div>
        );
    }

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Blog Posts
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">{posts.length} post{posts.length !== 1 ? "s" : ""} total</p>
                </div>
                <Link
                    href="/admin/blog/new"
                    className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
                >
                    <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    New Post
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="rounded-2xl border border-secondary bg-white p-12 text-center">
                    <svg className="mx-auto size-12 text-tertiary" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-primary">No blog posts yet</h3>
                    <p className="mt-2 text-sm text-tertiary">Create your first blog post to get started.</p>
                    <Link
                        href="/admin/blog/new"
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
                    >
                        Create First Post
                    </Link>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-secondary bg-white">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-secondary bg-[#faf8f5]">
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-tertiary">Title</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-tertiary">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-tertiary">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-tertiary">SEO</th>
                                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-tertiary">Date</th>
                                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider text-tertiary">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary">
                            {posts.map((post) => {
                                const hasSeo = !!(post.seo_title && post.seo_description && post.seo_keywords?.length);
                                return (
                                    <tr key={post.id} className="hover:bg-[#faf8f5]">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="text-sm font-medium text-primary line-clamp-1">{post.title}</p>
                                                <p className="mt-0.5 text-xs text-tertiary">/{post.slug}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                                    post.status === "published"
                                                        ? "bg-green-50 text-green-700"
                                                        : "bg-yellow-50 text-yellow-700"
                                                }`}
                                            >
                                                {post.status === "published" ? "Published" : "Draft"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-flex items-center gap-1 text-xs font-medium ${
                                                    hasSeo ? "text-green-600" : "text-yellow-600"
                                                }`}
                                            >
                                                {hasSeo ? (
                                                    <>
                                                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        Optimized
                                                    </>
                                                ) : (
                                                    <>
                                                        <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                                        </svg>
                                                        Missing
                                                    </>
                                                )}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-xs text-tertiary">
                                            {post.published_at
                                                ? new Date(post.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
                                                : "Not published"}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <Link
                                                    href={`/admin/blog/${post.id}/edit`}
                                                    className="rounded-lg border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                                                >
                                                    Edit
                                                </Link>
                                                {post.status === "published" && (
                                                    <Link
                                                        href={`/articles/${post.slug}`}
                                                        target="_blank"
                                                        className="rounded-lg border border-secondary px-3 py-1.5 text-xs font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                                                    >
                                                        View
                                                    </Link>
                                                )}
                                                <button
                                                    onClick={() => handleDelete(post.id, post.title)}
                                                    disabled={deleting === post.id}
                                                    className="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 disabled:opacity-50"
                                                >
                                                    {deleting === post.id ? "..." : "Delete"}
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
