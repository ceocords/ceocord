# CeoCord Kurulum Rehberi

## Windows için Kurulum

### Yöntem 1: Otomatik Installer (Önerilen)

1. GitHub'dan en son release'i indirin: https://github.com/ceocord/ceocords/releases
2. `CeoCordInstallerCli.exe` dosyasını çalıştırın
3. Discord kapalıyken installer'ı çalıştırın
4. Installer Discord'u otomatik olarak bulacak ve CeoCord'u yükleyecek

### Yöntem 2: Manuel Kurulum

1. Discord'u kapatın
2. GitHub'dan projeyi klonlayın veya ZIP olarak indirin:
   ```bash
   git clone https://github.com/ceocord/ceocords.git
   cd ceocords
   ```
3. Bağımlılıkları yükleyin:
   ```bash
   pnpm install
   ```
4. Projeyi build edin:
   ```bash
   pnpm build
   ```
5. Discord'a inject edin:
   ```bash
   pnpm inject
   ```
6. Discord'u açın - CeoCord yüklenecek!

### Yöntem 3: Web Browser Extension

1. Projeyi build edin:
   ```bash
   pnpm buildWeb
   ```
2. Chrome/Edge için:
   - `chrome://extensions/` adresine gidin
   - "Developer mode"u açın
   - "Load unpacked" tıklayın
   - `browser` klasörünü seçin

## Sorun Giderme

- Eğer installer çalışmıyorsa, Discord'u tamamen kapatıp tekrar deneyin
- Build hataları alıyorsanız, Node.js 18+ ve pnpm yüklü olduğundan emin olun
- Hala sorun yaşıyorsanız, GitHub Issues'da sorun bildirin
