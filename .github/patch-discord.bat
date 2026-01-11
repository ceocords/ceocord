@echo off
echo ========================================
echo CeoCord Discord Patch Script
echo ========================================
echo.

echo [1/6] Updating from GitHub...
cd /d "%~dp0\.."
git pull origin master
if errorlevel 1 (
    echo Warning: Git pull failed. Continuing with local version...
)
echo Update completed.
echo.

echo [2/6] Installing/Updating dependencies...
call pnpm install
if errorlevel 1 (
    echo Warning: pnpm install failed. Continuing anyway...
)
echo Dependencies updated.
echo.

echo [3/6] Closing Discord...
taskkill /F /IM Discord.exe >nul 2>&1
timeout /t 2 /nobreak >nul
echo Discord closed.
echo.

echo [4/6] Clearing Discord cache...
if exist "%APPDATA%\discord\Cache" (
    rmdir /s /q "%APPDATA%\discord\Cache" >nul 2>&1
    echo AppData cache cleared.
)
if exist "%LOCALAPPDATA%\Discord\Cache" (
    rmdir /s /q "%LOCALAPPDATA%\Discord\Cache" >nul 2>&1
    echo LocalAppData cache cleared.
)
if exist "%LOCALAPPDATA%\Discord\GPUCache" (
    rmdir /s /q "%LOCALAPPDATA%\Discord\GPUCache" >nul 2>&1
    echo GPUCache cleared.
)
if exist "%LOCALAPPDATA%\Discord\Code Cache" (
    rmdir /s /q "%LOCALAPPDATA%\Discord\Code Cache" >nul 2>&1
    echo Code Cache cleared.
)
if exist "%LOCALAPPDATA%\Discord\ShaderCache" (
    rmdir /s /q "%LOCALAPPDATA%\Discord\ShaderCache" >nul 2>&1
    echo ShaderCache cleared.
)
echo Cache cleared.
echo.

echo [5/6] Building CeoCord...
cd /d "%~dp0\.."
call pnpm build
if errorlevel 1 (
    echo Build failed! Press any key to exit...
    pause >nul
    exit /b 1
)
echo Build completed.
echo.

echo [6/6] Patching Discord...
call pnpm inject
if errorlevel 1 (
    echo Patch failed! Press any key to exit...
    pause >nul
    exit /b 1
)
echo.
echo ========================================
echo Patch completed successfully!
echo You can now open Discord.
echo ========================================
pause
