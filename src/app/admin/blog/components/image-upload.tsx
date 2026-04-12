"use client";

import { useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface ImageUploadProps {
    value: string;
    onChange: (url: string) => void;
    label: string;
    hint?: string;
    aspect?: "hero" | "og";
}

export function ImageUpload({ value, onChange, label, hint, aspect = "hero" }: ImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const previewClass = aspect === "og" ? "h-36" : "h-40";
    const dropZoneClass = "h-32";

    const uploadFile = useCallback(async (file: File) => {
        setError("");

        if (!file.type.startsWith("image/")) {
            setError("Please upload an image file (JPG, PNG, WebP, GIF).");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("Image must be under 5MB.");
            return;
        }

        setUploading(true);

        try {
            const ext = file.name.split(".").pop() ?? "jpg";
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
            const path = `${aspect}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from("blog")
                .upload(path, file, {
                    cacheControl: "3600",
                    upsert: false,
                });

            if (uploadError) throw uploadError;

            const { data: urlData } = supabase.storage
                .from("blog")
                .getPublicUrl(path);

            onChange(urlData.publicUrl);
        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : "Upload failed.";
            setError(message);
        } finally {
            setUploading(false);
        }
    }, [aspect, onChange]);

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) uploadFile(file);
    }

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) uploadFile(file);
        if (inputRef.current) inputRef.current.value = "";
    }

    function handleRemove() {
        onChange("");
    }

    return (
        <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-tertiary">{label}</label>
            {hint && <p className="mt-0.5 text-xs text-quaternary">{hint}</p>}

            {value ? (
                /* Preview with image loaded */
                <div className="mt-2 group relative overflow-hidden rounded-xl border border-secondary">
                    <img
                        src={value}
                        alt="Preview"
                        className={`w-full object-cover ${previewClass}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all group-hover:bg-black/40 group-hover:opacity-100">
                        <button
                            type="button"
                            onClick={() => inputRef.current?.click()}
                            className="rounded-lg bg-white px-4 py-2 text-xs font-semibold text-primary shadow-lg hover:bg-gray-50"
                        >
                            Replace
                        </button>
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="rounded-lg bg-red-500 px-4 py-2 text-xs font-semibold text-white shadow-lg hover:bg-red-600"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                /* Drop zone */
                <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleDrop}
                    onClick={() => !uploading && inputRef.current?.click()}
                    className={`mt-2 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-4 transition-all ${dropZoneClass} ${
                        dragOver
                            ? "border-brand-600 bg-brand-50"
                            : "border-secondary bg-[#faf8f5] hover:border-brand-400 hover:bg-brand-50/50"
                    } ${uploading ? "pointer-events-none opacity-60" : ""}`}
                >
                    {uploading ? (
                        <>
                            <div className="size-8 animate-spin rounded-full border-2 border-brand-600 border-t-transparent" />
                            <p className="mt-3 text-sm font-medium text-primary">Uploading...</p>
                        </>
                    ) : (
                        <>
                            <svg className="size-5 text-tertiary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                            </svg>
                            <p className="mt-2 text-xs text-primary">
                                <span className="font-semibold text-brand-600">Click to upload</span> or drag and drop
                            </p>
                            <p className="mt-0.5 text-[11px] text-tertiary">
                                JPG, PNG, WebP or GIF (max 5MB){aspect === "og" && " — 1200x630 recommended"}
                            </p>
                        </>
                    )}
                </div>
            )}

            {/* URL input fallback */}
            <div className="mt-2 flex items-center gap-2">
                <div className="h-px flex-1 bg-secondary" />
                <span className="text-xs text-quaternary">or paste URL</span>
                <div className="h-px flex-1 bg-secondary" />
            </div>
            <input
                type="url"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-2 w-full rounded-lg border border-secondary bg-white px-4 py-2 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                placeholder="https://example.com/image.jpg"
            />

            {error && (
                <p className="mt-1.5 text-xs text-red-600">{error}</p>
            )}

            {/* Hidden file input */}
            <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileSelect}
                className="hidden"
            />
        </div>
    );
}
