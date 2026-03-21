"use client";

import { createContext, useContext, useState, useCallback, type ReactNode, type FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, AlertTriangle, InfoCircle, ShoppingCart01 } from "@untitledui/icons";
import { cx } from "@/utils/cx";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Button } from "@/components/base/buttons/button";

type ToastColor = "brand" | "gray" | "error" | "warning" | "success";

interface Toast {
    id: string;
    color: ToastColor;
    title: string;
    description?: string;
    icon?: FC<{ className?: string }>;
    action?: {
        label: string;
        onClick: () => void;
    };
    duration?: number;
}

interface ToastContextType {
    addToast: (toast: Omit<Toast, "id">) => void;
    removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

const defaultIcons: Record<ToastColor, FC<{ className?: string }>> = {
    brand: InfoCircle,
    gray: InfoCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
};

const colorStyles: Record<ToastColor, { bg: string; border: string; title: string; description: string }> = {
    brand: {
        bg: "bg-brand-25",
        border: "border-brand-300",
        title: "text-brand-700",
        description: "text-brand-600",
    },
    gray: {
        bg: "bg-primary",
        border: "border-secondary",
        title: "text-primary",
        description: "text-secondary",
    },
    error: {
        bg: "bg-error-25",
        border: "border-error-300",
        title: "text-error-700",
        description: "text-error-600",
    },
    warning: {
        bg: "bg-warning-25",
        border: "border-warning-300",
        title: "text-warning-700",
        description: "text-warning-600",
    },
    success: {
        bg: "bg-success-25",
        border: "border-success-300",
        title: "text-success-700",
        description: "text-success-600",
    },
};

interface ToastItemProps {
    toast: Toast;
    onRemove: (id: string) => void;
}

const ToastItem = ({ toast, onRemove }: ToastItemProps) => {
    const Icon = toast.icon || defaultIcons[toast.color];
    const styles = colorStyles[toast.color];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cx(
                "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border p-4 shadow-lg",
                styles.bg,
                styles.border
            )}
        >
            <FeaturedIcon
                icon={Icon}
                color={toast.color}
                theme="light"
                size="md"
                className="shrink-0"
            />

            <div className="flex-1 space-y-1">
                <h4 className={cx("text-sm font-semibold", styles.title)}>
                    {toast.title}
                </h4>
                {toast.description && (
                    <p className={cx("text-sm", styles.description)}>
                        {toast.description}
                    </p>
                )}
                {toast.action && (
                    <div className="mt-3">
                        <Button
                            size="sm"
                            color="secondary"
                            onClick={() => {
                                toast.action?.onClick();
                                onRemove(toast.id);
                            }}
                        >
                            {toast.action.label}
                        </Button>
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={() => onRemove(toast.id)}
                className={cx(
                    "rounded p-1 transition hover:bg-black/5",
                    styles.title
                )}
                aria-label="Dismiss"
            >
                <X className="size-4" />
            </button>
        </motion.div>
    );
};

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = useCallback((toast: Omit<Toast, "id">) => {
        const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
        const newToast = { ...toast, id };

        setToasts((prev) => [...prev, newToast]);

        // Auto remove after duration (default 5 seconds)
        const duration = toast.duration ?? 5000;
        if (duration > 0) {
            setTimeout(() => {
                setToasts((prev) => prev.filter((t) => t.id !== id));
            }, duration);
        }
    }, []);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}

            {/* Toast Container */}
            <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-3 p-4">
                <AnimatePresence mode="popLayout">
                    {toasts.map((toast) => (
                        <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
                    ))}
                </AnimatePresence>
            </div>
        </ToastContext.Provider>
    );
};

// Convenience hook for common toast types
export const useToastActions = () => {
    const { addToast } = useToast();

    return {
        success: (title: string, description?: string, action?: Toast["action"]) =>
            addToast({ color: "success", title, description, action }),

        error: (title: string, description?: string) =>
            addToast({ color: "error", title, description }),

        warning: (title: string, description?: string) =>
            addToast({ color: "warning", title, description }),

        info: (title: string, description?: string) =>
            addToast({ color: "brand", title, description }),

        cart: (title: string, description?: string, action?: Toast["action"]) =>
            addToast({
                color: "success",
                title,
                description,
                icon: ShoppingCart01,
                action,
            }),
    };
};
