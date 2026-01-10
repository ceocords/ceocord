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

export const enum IpcEvents {
    INIT_FILE_WATCHERS = "CeoCordInitFileWatchers",

    OPEN_QUICKCSS = "CeoCordOpenQuickCss",
    GET_QUICK_CSS = "CeoCordGetQuickCss",
    SET_QUICK_CSS = "CeoCordSetQuickCss",
    QUICK_CSS_UPDATE = "CeoCordQuickCssUpdate",

    GET_SETTINGS = "CeoCordGetSettings",
    SET_SETTINGS = "CeoCordSetSettings",

    GET_THEMES_LIST = "CeoCordGetThemesList",
    GET_THEME_DATA = "CeoCordGetThemeData",
    GET_THEME_SYSTEM_VALUES = "CeoCordGetThemeSystemValues",
    THEME_UPDATE = "CeoCordThemeUpdate",

    OPEN_EXTERNAL = "CeoCordOpenExternal",
    OPEN_THEMES_FOLDER = "CeoCordOpenThemesFolder",
    OPEN_SETTINGS_FOLDER = "CeoCordOpenSettingsFolder",

    GET_UPDATES = "CeoCordGetUpdates",
    GET_REPO = "CeoCordGetRepo",
    UPDATE = "CeoCordUpdate",
    BUILD = "CeoCordBuild",

    OPEN_MONACO_EDITOR = "CeoCordOpenMonacoEditor",
    GET_MONACO_THEME = "CeoCordGetMonacoTheme",

    GET_PLUGIN_IPC_METHOD_MAP = "CeoCordGetPluginIpcMethodMap",

    CSP_IS_DOMAIN_ALLOWED = "CeoCordCspIsDomainAllowed",
    CSP_REMOVE_OVERRIDE = "CeoCordCspRemoveOverride",
    CSP_REQUEST_ADD_OVERRIDE = "CeoCordCspRequestAddOverride",

    GET_RENDERER_CSS = "CeoCordGetRendererCss",
    RENDERER_CSS_UPDATE = "CeoCordRendererCssUpdate",
    PRELOAD_GET_RENDERER_JS = "CeoCordPreloadGetRendererJs",
}
