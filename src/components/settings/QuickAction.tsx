/*
 * CeoCord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./QuickAction.css";

import { Card } from "@components/Card";
import { classNameFactory } from "@utils/css";
import type { ComponentType, PropsWithChildren, ReactNode } from "react";

const cl = classNameFactory("vc-settings-quickActions-");

export interface QuickActionProps {
    Icon: ComponentType<{ className?: string; }>;
    text: ReactNode;
    action?: () => void;
    disabled?: boolean;
}

export function QuickAction(props: QuickActionProps) {
    const { Icon, action, text, disabled } = props;

    return (
        <button 
            className={cl("pill")} 
            onClick={action} 
            disabled={disabled}
            style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(37, 99, 235, 0.2) 100%)",
                border: "1px solid rgba(59, 130, 246, 0.3)",
                boxShadow: "0 2px 8px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(59, 130, 246, 0.1)",
            }}
        >
            <Icon className={cl("img")} />
            <span>{text}</span>
        </button>
    );
}

export function QuickActionCard(props: PropsWithChildren) {
    return (
        <Card className={cl("card")}>
            {props.children}
        </Card>
    );
}
