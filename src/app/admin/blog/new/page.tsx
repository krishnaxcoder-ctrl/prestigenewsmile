"use client";

import { BlogForm } from "../components/blog-form";

export default function NewBlogPostPage() {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-light text-primary" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Create New Post
                </h1>
                <p className="mt-1 text-sm text-tertiary">Fill in the details and SEO fields to create a new blog post</p>
            </div>
            <BlogForm />
        </div>
    );
}
