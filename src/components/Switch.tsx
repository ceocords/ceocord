/*
 * CeoCord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import "./Switch.css";

import { classNameFactory } from "@utils/css";
import { classes } from "@utils/misc";
import { useState } from "@webpack/common";
import type { FocusEvent } from "react";

const switchCls = classNameFactory("vc-switch-");

const SWITCH_ON = "var(--brand-500)";
const SWITCH_OFF = "var(--primary-400)";

export interface SwitchProps {
    disabled?: boolean;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export function Switch({ checked, onChange, disabled }: SwitchProps) {
    const [focusVisible, setFocusVisible] = useState(false);

    // Due to how we wrap the invisible input, there is no good way to do this with css.
    // We need it on the parent, not the input itself. For this, you can use either:
    // - :focus-within ~ this shows also when clicking, not just on keyboard focus => SUCKS
    // - :has(:focus-visible) ~ works but :has performs terribly inside Discord
    // - JS event handlers ~ what we are using now
    const handleFocusChange = (event: FocusEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        setFocusVisible(target.matches(":focus-visible"));
    };

    return (
        <div>
            <div className={classes(switchCls("container", { checked, disabled, focusVisible }))}>
                <svg
                    className={switchCls("slider")}
                    viewBox="0 0 28 20"
                    preserveAspectRatio="xMinYMid meet"
                    aria-hidden="true"
                    style={{
                        transform: checked ? "translateX(12px)" : "translateX(-3px)",
                    }}
                >
                    <rect fill="white" x="4" y="0" height="20" width="20" rx="10" />
                    <svg viewBox="0 0 20 20" fill="none" style={{ transform: "scale(0.7)", transformOrigin: "center" }}>
                        {checked ? (
                            <path 
                                d="M6 10L9 13L14 7"
                                stroke="white"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        ) : (
                            <path 
                                d="M7 7L13 13M13 7L7 13"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                            />
                        )}
                    </svg>
                </svg>
                <input
                    onFocus={handleFocusChange}
                    onBlur={handleFocusChange}
                    disabled={disabled}
                    type="checkbox"
                    className={switchCls("input")}
                    tabIndex={0}
                    checked={checked}
                    onChange={e => onChange(e.currentTarget.checked)}
                />
            </div>
        </div>
    );
}
