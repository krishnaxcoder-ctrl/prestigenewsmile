"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createBlogPost, updateBlogPost, type BlogPost, type BlogContentBlock } from "@/lib/supabase";
import { ImageUpload } from "./image-upload";

interface BlogFormProps {
    post?: BlogPost;
}

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
}

export function BlogForm({ post }: BlogFormProps) {
    const router = useRouter();
    const isEditing = !!post;

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");

    // Basic fields
    const [title, setTitle] = useState(post?.title ?? "");
    const [slug, setSlug] = useState(post?.slug ?? "");
    const [excerpt, setExcerpt] = useState(post?.excerpt ?? "");
    const [category, setCategory] = useState(post?.category ?? "General");
    const [heroImage, setHeroImage] = useState(post?.hero_image ?? "");
    const [author, setAuthor] = useState(post?.author ?? "Prestige Smile");
    const [authorRole, setAuthorRole] = useState(post?.author_role ?? "Dental Aesthetics Team");
    const [authorInitials, setAuthorInitials] = useState(post?.author_initials ?? "PS");
    const [readTime, setReadTime] = useState(post?.read_time ?? "5 min read");
    const [status, setStatus] = useState<"draft" | "published">(post?.status ?? "draft");

    // SEO fields
    const [seoTitle, setSeoTitle] = useState(post?.seo_title ?? "");
    const [seoDescription, setSeoDescription] = useState(post?.seo_description ?? "");
    const [seoKeywords, setSeoKeywords] = useState(post?.seo_keywords?.join(", ") ?? "");
    const [ogImage, setOgImage] = useState(post?.og_image ?? "");
    const [canonicalUrl, setCanonicalUrl] = useState(post?.canonical_url ?? "");
    const [tags, setTags] = useState(post?.tags?.join(", ") ?? "");

    // Content blocks
    const [content, setContent] = useState<BlogContentBlock[]>(
        post?.content?.length ? post.content : [{ type: "paragraph", text: "" }]
    );

    function handleTitleChange(value: string) {
        setTitle(value);
        if (!isEditing || !post?.slug) {
            setSlug(generateSlug(value));
        }
    }

    function addBlock(type: BlogContentBlock["type"]) {
        const newBlock: BlogContentBlock = type === "list"
            ? { type, text: "", items: [""] }
            : { type, text: "" };
        setContent([...content, newBlock]);
    }

    function updateBlock(index: number, updates: Partial<BlogContentBlock>) {
        setContent(content.map((b, i) => (i === index ? { ...b, ...updates } : b)));
    }

    function removeBlock(index: number) {
        if (content.length <= 1) return;
        setContent(content.filter((_, i) => i !== index));
    }

    function moveBlock(index: number, direction: "up" | "down") {
        const newIndex = direction === "up" ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= content.length) return;
        const newContent = [...content];
        [newContent[index], newContent[newIndex]] = [newContent[newIndex], newContent[index]];
        setContent(newContent);
    }

    function addListItem(blockIndex: number) {
        const block = content[blockIndex];
        if (block.type !== "list") return;
        updateBlock(blockIndex, { items: [...(block.items ?? []), ""] });
    }

    function updateListItem(blockIndex: number, itemIndex: number, value: string) {
        const block = content[blockIndex];
        if (block.type !== "list") return;
        const newItems = [...(block.items ?? [])];
        newItems[itemIndex] = value;
        updateBlock(blockIndex, { items: newItems });
    }

    function removeListItem(blockIndex: number, itemIndex: number) {
        const block = content[blockIndex];
        if (block.type !== "list" || !block.items || block.items.length <= 1) return;
        updateBlock(blockIndex, { items: block.items.filter((_, i) => i !== itemIndex) });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!title.trim() || !slug.trim()) {
            setError("Title and slug are required.");
            return;
        }

        setSaving(true);
        setError("");

        const keywordsArray = seoKeywords.split(",").map((k) => k.trim()).filter(Boolean);
        const tagsArray = tags.split(",").map((t) => t.trim()).filter(Boolean);

        const postData = {
            title: title.trim(),
            slug: slug.trim(),
            excerpt: excerpt.trim() || null,
            content: content as unknown as BlogContentBlock[],
            category,
            tags: tagsArray.length ? tagsArray : null,
            hero_image: heroImage.trim() || null,
            author,
            author_role: authorRole || null,
            author_initials: authorInitials || null,
            read_time: readTime || null,
            status,
            seo_title: seoTitle.trim() || null,
            seo_description: seoDescription.trim() || null,
            seo_keywords: keywordsArray.length ? keywordsArray : null,
            og_image: ogImage.trim() || null,
            canonical_url: canonicalUrl.trim() || null,
            published_at: status === "published" ? (post?.published_at ?? new Date().toISOString()) : null,
        };

        try {
            if (isEditing && post) {
                await updateBlogPost(post.id, postData);
            } else {
                await createBlogPost(postData);
            }
            router.push("/admin/blog");
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Failed to save post.";
            setError(message);
        } finally {
            setSaving(false);
        }
    }

    const blockTypeLabels: Record<string, string> = {
        paragraph: "Paragraph",
        heading: "Heading",
        list: "List",
        callout: "Callout",
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                </div>
            )}

            {/* Basic Info */}
            <div className="rounded-2xl border border-secondary bg-white p-6">
                <h2 className="text-lg font-medium text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Basic Information
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Title *</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => handleTitleChange(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="10 Tips for a Brighter Smile"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Slug *</label>
                        <div className="mt-1.5 flex items-center gap-0">
                            <span className="rounded-l-lg border border-r-0 border-secondary bg-[#faf8f5] px-3 py-2.5 text-sm text-tertiary">/articles/</span>
                            <input
                                type="text"
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                className="w-full rounded-r-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                                placeholder="brighter-smile-tips"
                                required
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Excerpt</label>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            rows={2}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="A short summary shown on the blog listing page..."
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                        >
                            {["General", "Whitening", "Guide", "Aftercare", "FAQ", "Tips", "News"].map((c) => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Read Time</label>
                        <input
                            type="text"
                            value={readTime}
                            onChange={(e) => setReadTime(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="5 min read"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <ImageUpload
                            value={heroImage}
                            onChange={setHeroImage}
                            label="Hero Image"
                            hint="Displayed at the top of the article"
                            aspect="hero"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Tags</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="whitening, dental care, tips"
                        />
                        <p className="mt-1 text-xs text-tertiary">Comma-separated</p>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Status</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Author */}
            <div className="rounded-2xl border border-secondary bg-white p-6">
                <h2 className="text-lg font-medium text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Author
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-3">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Name</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Role</label>
                        <input
                            type="text"
                            value={authorRole}
                            onChange={(e) => setAuthorRole(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Initials</label>
                        <input
                            type="text"
                            value={authorInitials}
                            onChange={(e) => setAuthorInitials(e.target.value)}
                            maxLength={3}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                        />
                    </div>
                </div>
            </div>

            {/* SEO Section */}
            <div className="rounded-2xl border border-secondary bg-white p-6">
                <div className="flex items-center gap-3">
                    <h2 className="text-lg font-medium text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        SEO & Visibility
                    </h2>
                    <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700">Google</span>
                </div>
                <p className="mt-1 text-xs text-tertiary">Optimize how this post appears in Google search results</p>

                {/* Google Preview */}
                <div className="mt-6 rounded-xl border border-secondary bg-[#faf8f5] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-tertiary">Google Search Preview</p>
                    <div className="mt-3">
                        <p className="text-lg text-[#1a0dab] line-clamp-1" style={{ fontFamily: "Arial, sans-serif" }}>
                            {seoTitle || title || "Your Page Title"}
                        </p>
                        <p className="text-sm text-[#006621]" style={{ fontFamily: "Arial, sans-serif" }}>
                            yoursite.com/articles/{slug || "your-slug"}
                        </p>
                        <p className="mt-0.5 text-sm text-[#545454] line-clamp-2" style={{ fontFamily: "Arial, sans-serif" }}>
                            {seoDescription || excerpt || "Add a meta description to control how this page appears in search results..."}
                        </p>
                    </div>
                </div>

                <div className="mt-6 grid gap-5">
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">
                            Meta Title
                            <span className="ml-2 font-normal normal-case tracking-normal text-quaternary">
                                ({(seoTitle || title).length}/60 characters)
                            </span>
                        </label>
                        <input
                            type="text"
                            value={seoTitle}
                            onChange={(e) => setSeoTitle(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder={title || "SEO-optimized title (50-60 chars ideal)"}
                        />
                        <div className="mt-1 h-1 w-full rounded-full bg-gray-100">
                            <div
                                className={`h-1 rounded-full transition-all ${
                                    (seoTitle || title).length <= 60 ? "bg-green-500" : "bg-red-500"
                                }`}
                                style={{ width: `${Math.min(((seoTitle || title).length / 60) * 100, 100)}%` }}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">
                            Meta Description
                            <span className="ml-2 font-normal normal-case tracking-normal text-quaternary">
                                ({(seoDescription || excerpt || "").length}/160 characters)
                            </span>
                        </label>
                        <textarea
                            value={seoDescription}
                            onChange={(e) => setSeoDescription(e.target.value)}
                            rows={3}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="Describe this page for search engines (150-160 chars ideal)"
                        />
                        <div className="mt-1 h-1 w-full rounded-full bg-gray-100">
                            <div
                                className={`h-1 rounded-full transition-all ${
                                    (seoDescription || excerpt || "").length <= 160 ? "bg-green-500" : "bg-red-500"
                                }`}
                                style={{ width: `${Math.min(((seoDescription || excerpt || "").length / 160) * 100, 100)}%` }}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">SEO Keywords</label>
                        <input
                            type="text"
                            value={seoKeywords}
                            onChange={(e) => setSeoKeywords(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="teeth whitening, dental care, smile, oral health"
                        />
                        <p className="mt-1 text-xs text-tertiary">Comma-separated keywords for search engines</p>
                    </div>
                    <div>
                        <ImageUpload
                            value={ogImage}
                            onChange={setOgImage}
                            label="OG Image (Social Sharing)"
                            hint="Shown when shared on Facebook, Twitter, LinkedIn"
                            aspect="og"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">Canonical URL</label>
                        <input
                            type="url"
                            value={canonicalUrl}
                            onChange={(e) => setCanonicalUrl(e.target.value)}
                            className="mt-1.5 w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                            placeholder="https://yoursite.com/articles/..."
                        />
                    </div>
                </div>
            </div>

            {/* Content Blocks */}
            <div className="rounded-2xl border border-secondary bg-white p-6">
                <h2 className="text-lg font-medium text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Content
                </h2>
                <p className="mt-1 text-xs text-tertiary">Build your article using content blocks</p>

                <div className="mt-6 space-y-4">
                    {content.map((block, index) => (
                        <div key={index} className="group rounded-xl border border-secondary bg-[#faf8f5] p-4">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="inline-flex rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-tertiary shadow-sm">
                                    {blockTypeLabels[block.type]} #{index + 1}
                                </span>
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={() => moveBlock(index, "up")}
                                        disabled={index === 0}
                                        className="rounded p-1 text-tertiary hover:bg-white hover:text-primary disabled:opacity-30"
                                    >
                                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => moveBlock(index, "down")}
                                        disabled={index === content.length - 1}
                                        className="rounded p-1 text-tertiary hover:bg-white hover:text-primary disabled:opacity-30"
                                    >
                                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => removeBlock(index)}
                                        disabled={content.length <= 1}
                                        className="rounded p-1 text-red-400 hover:bg-white hover:text-red-600 disabled:opacity-30"
                                    >
                                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {block.type === "list" ? (
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        value={block.text}
                                        onChange={(e) => updateBlock(index, { text: e.target.value })}
                                        className="w-full rounded-lg border border-secondary bg-white px-4 py-2 text-sm text-primary outline-none focus:border-brand-600"
                                        placeholder="List title (optional)"
                                    />
                                    {block.items?.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2">
                                            <span className="text-xs text-tertiary">{itemIndex + 1}.</span>
                                            <input
                                                type="text"
                                                value={item}
                                                onChange={(e) => updateListItem(index, itemIndex, e.target.value)}
                                                className="flex-1 rounded-lg border border-secondary bg-white px-4 py-2 text-sm text-primary outline-none focus:border-brand-600"
                                                placeholder="List item..."
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeListItem(index, itemIndex)}
                                                className="rounded p-1 text-red-400 hover:text-red-600"
                                            >
                                                <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => addListItem(index)}
                                        className="text-xs font-medium text-brand-600 hover:text-brand-700"
                                    >
                                        + Add item
                                    </button>
                                </div>
                            ) : (
                                <textarea
                                    value={block.text}
                                    onChange={(e) => updateBlock(index, { text: e.target.value })}
                                    rows={block.type === "heading" ? 1 : 3}
                                    className="w-full rounded-lg border border-secondary bg-white px-4 py-2.5 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                                    placeholder={
                                        block.type === "heading"
                                            ? "Section heading..."
                                            : block.type === "callout"
                                              ? "Important note or tip..."
                                              : "Write your paragraph..."
                                    }
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {(["paragraph", "heading", "list", "callout"] as const).map((type) => (
                        <button
                            key={type}
                            type="button"
                            onClick={() => addBlock(type)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-secondary bg-white px-3 py-2 text-xs font-medium text-secondary hover:border-brand-600 hover:text-brand-600"
                        >
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {blockTypeLabels[type]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between rounded-2xl border border-secondary bg-white p-6">
                <button
                    type="button"
                    onClick={() => router.push("/admin/blog")}
                    className="rounded-lg border border-secondary px-5 py-2.5 text-sm font-medium text-secondary hover:bg-primary_hover hover:text-primary"
                >
                    Cancel
                </button>
                <div className="flex items-center gap-3">
                    {status === "published" && (
                        <span className="flex items-center gap-1.5 text-xs text-green-600">
                            <svg className="size-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Will be published
                        </span>
                    )}
                    <button
                        type="submit"
                        disabled={saving}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-50"
                    >
                        {saving ? (
                            <>
                                <div className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                Saving...
                            </>
                        ) : (
                            isEditing ? "Update Post" : "Create Post"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}
