"use client";

import type { FC, ReactNode } from "react";
import { X, AlertCircle, CheckCircle, AlertTriangle, InfoCircle } from "@untitledui/icons";
import { cx, sortCx } from "@/utils/cx";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";
import { Button } from "@/components/base/buttons/button";

type AlertColor = "brand" | "gray" | "error" | "warning" | "success";

const styles = sortCx({
    common: {
        root: "relative flex gap-3 rounded-xl border p-4",
    },
    colors: {
        brand: {
            root: "border-brand-300 bg-brand-25",
            title: "text-brand-700",
            description: "text-brand-600",
            link: "text-brand-700 hover:text-brand-800",
        },
        gray: {
            root: "border-secondary bg-secondary",
            title: "text-primary",
            description: "text-secondary",
            link: "text-primary hover:text-secondary",
        },
        error: {
            root: "border-error-300 bg-error-25",
            title: "text-error-700",
            description: "text-error-600",
            link: "text-error-700 hover:text-error-800",
        },
        warning: {
            root: "border-warning-300 bg-warning-25",
            title: "text-warning-700",
            description: "text-warning-600",
            link: "text-warning-700 hover:text-warning-800",
        },
        success: {
            root: "border-success-300 bg-success-25",
            title: "text-success-700",
            description: "text-success-600",
            link: "text-success-700 hover:text-success-800",
        },
    },
});

const defaultIcons: Record<AlertColor, FC<{ className?: string }>> = {
    brand: InfoCircle,
    gray: InfoCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
};

export interface AlertProps {
    color?: AlertColor;
    title?: string;
    description?: ReactNode;
    icon?: FC<{ className?: string }>;
    showIcon?: boolean;
    dismissible?: boolean;
    onDismiss?: () => void;
    actions?: ReactNode;
    className?: string;
    children?: ReactNode;
}

export const Alert = (props: AlertProps) => {
    const {
        color = "brand",
        title,
        description,
        icon,
        showIcon = true,
        dismissible = false,
        onDismiss,
        actions,
        className,
        children,
    } = props;

    const Icon = icon || defaultIcons[color];

    return (
        <div className={cx(styles.common.root, styles.colors[color].root, className)}>
            {showIcon && (
                <FeaturedIcon
                    icon={Icon}
                    color={color}
                    theme="light"
                    size="md"
                    className="shrink-0"
                />
            )}

            <div className="flex-1 space-y-1">
                {title && (
                    <h4 className={cx("text-sm font-semibold", styles.colors[color].title)}>
                        {title}
                    </h4>
                )}
                {description && (
                    <p className={cx("text-sm", styles.colors[color].description)}>
                        {description}
                    </p>
                )}
                {children}
                {actions && <div className="mt-3 flex items-center gap-3">{actions}</div>}
            </div>

            {dismissible && (
                <button
                    type="button"
                    onClick={onDismiss}
                    className={cx(
                        "absolute right-3 top-3 rounded p-1 transition hover:bg-black/5",
                        styles.colors[color].link
                    )}
                    aria-label="Dismiss"
                >
                    <X className="size-4" />
                </button>
            )}
        </div>
    );
};

// Compact inline alert variant
export interface AlertInlineProps {
    color?: AlertColor;
    children: ReactNode;
    icon?: FC<{ className?: string }>;
    showIcon?: boolean;
    className?: string;
}

export const AlertInline = (props: AlertInlineProps) => {
    const { color = "brand", children, icon, showIcon = true, className } = props;

    const Icon = icon || defaultIcons[color];

    return (
        <div
            className={cx(
                "flex items-center gap-2 rounded-lg border px-3 py-2 text-sm",
                styles.colors[color].root,
                styles.colors[color].description,
                className
            )}
        >
            {showIcon && <Icon className="size-4 shrink-0" />}
            {children}
        </div>
    );
};
