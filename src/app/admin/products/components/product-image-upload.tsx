"use client";

import { useState, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";

interface ProductImageUploadProps {
    value: string[];
    onChange: (urls: string[]) => void;
    label: string;
    hint?: string;
}

export function ProductImageUpload({ value, onChange, label, hint }: ProductImageUploadProps) {
    const [uploading, setUploading] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [error, setError] = useState("");
    const [pasteUrl, setPasteUrl] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const uploadFiles = useCallback(
        async (files: File[]) => {
            setError("");

            const valid = files.filter((f) => f.type.startsWith("image/"));
            if (valid.length === 0) {
                setError("Please upload image files (JPG, PNG, WebP, GIF).");
                return;
            }

            const oversized = valid.find((f) => f.size > 5 * 1024 * 1024);
            if (oversized) {
                setError(`"${oversized.name}" is larger than 5MB.`);
                return;
            }

            setUploading(true);

            try {
                const uploaded: string[] = [];
                for (const file of valid) {
                    const ext = file.name.split(".").pop() ?? "jpg";
                    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${ext}`;
                    const path = `uploads/${fileName}`;

                    const { error: uploadError } = await supabase.storage
                        .from("products")
                        .upload(path, file, {
                            cacheControl: "3600",
                            upsert: false,
                        });

                    if (uploadError) throw uploadError;

                    const { data: urlData } = supabase.storage.from("products").getPublicUrl(path);
                    uploaded.push(urlData.publicUrl);
                }

                onChange([...value, ...uploaded]);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : "Upload failed.";
                setError(message);
            } finally {
                setUploading(false);
            }
        },
        [value, onChange],
    );

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        const files = Array.from(e.dataTransfer.files ?? []);
        if (files.length) uploadFiles(files);
    }

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const files = Array.from(e.target.files ?? []);
        if (files.length) uploadFiles(files);
        if (inputRef.current) inputRef.current.value = "";
    }

    function handleRemove(index: number) {
        onChange(value.filter((_, i) => i !== index));
    }

    function handleMove(index: number, direction: -1 | 1) {
        const next = [...value];
        const target = index + direction;
        if (target < 0 || target >= next.length) return;
        [next[index], next[target]] = [next[target], next[index]];
        onChange(next);
    }

    function handleAddUrl() {
        const url = pasteUrl.trim();
        if (!url) return;
        onChange([...value, url]);
        setPasteUrl("");
    }

    return (
        <div>
            <label className="block text-xs font-medium text-tertiary">{label}</label>
            {hint && <p className="mt-0.5 text-xs text-tertiary">{hint}</p>}

            {value.length > 0 && (
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {value.map((url, index) => (
                        <div
                            key={`${url}-${index}`}
                            className="group relative overflow-hidden rounded-xl border border-secondary bg-white"
                        >
                            <div className="relative aspect-square">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={url}
                                    alt={`Product image ${index + 1}`}
                                    className="h-full w-full object-cover"
                                />
                                {index === 0 && (
                                    <span className="absolute left-2 top-2 rounded-md bg-brand-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                                        Main
                                    </span>
                                )}
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/0 opacity-0 transition-all group-hover:bg-black/50 group-hover:opacity-100">
                                <div className="flex gap-1.5">
                                    <button
                                        type="button"
                                        onClick={() => handleMove(index, -1)}
                                        disabled={index === 0}
                                        className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-primary shadow-lg hover:bg-gray-50 disabled:opacity-40"
                                        title="Move left"
                                    >
                                        ←
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleMove(index, 1)}
                                        disabled={index === value.length - 1}
                                        className="rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-primary shadow-lg hover:bg-gray-50 disabled:opacity-40"
                                        title="Move right"
                                    >
                                        →
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemove(index)}
                                    className="rounded-md bg-red-500 px-3 py-1 text-[11px] font-semibold text-white shadow-lg hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div
                onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
                onClick={() => !uploading && inputRef.current?.click()}
                className={`mt-3 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-4 transition-all ${
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
                        <svg
                            className="size-5 text-tertiary"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                            />
                        </svg>
                        <p className="mt-2 text-xs text-primary">
                            <span className="font-semibold text-brand-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="mt-0.5 text-[11px] text-tertiary">
                            JPG, PNG, WebP or GIF — up to 5MB each. You can select multiple images at once.
                        </p>
                    </>
                )}
            </div>

            <div className="mt-3 flex items-center gap-2">
                <div className="h-px flex-1 bg-secondary" />
                <span className="text-xs text-tertiary">or paste image URL</span>
                <div className="h-px flex-1 bg-secondary" />
            </div>
            <div className="mt-2 flex gap-2">
                <input
                    type="url"
                    value={pasteUrl}
                    onChange={(e) => setPasteUrl(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            handleAddUrl();
                        }
                    }}
                    placeholder="https://example.com/image.jpg"
                    className="w-full rounded-lg border border-secondary bg-white px-3 py-2 text-sm text-primary outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600"
                />
                <button
                    type="button"
                    onClick={handleAddUrl}
                    className="rounded-lg border border-secondary bg-white px-3 py-2 text-xs font-semibold text-primary hover:bg-gray-50"
                >
                    Add
                </button>
            </div>

            {error && <p className="mt-2 text-xs text-red-600">{error}</p>}

            <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                multiple
                onChange={handleFileSelect}
                className="hidden"
            />
        </div>
    );
}
