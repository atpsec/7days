# DevSecOps Roadmap Website

Bu repo, 90 günlük DevSecOps ve CI/CD güvenliği öğrenme planını statik bir web sitesine dönüştürür.

Canlı site: https://atpsec.github.io/7days/

## Dosyalar

- `index.html`: Ana sayfa
- `styles.css`: Tasarım ve responsive görünüm
- `script.js`: Arama, filtre, sekmeler, mobil menü ve akordeon davranışları
- `assets/roadmap-snapshot.png`: İlk ekranda kullanılan yol haritası görseli

## Yerelde çalıştırma

Dosyaları açmak için doğrudan `index.html` dosyasına çift tıklayabilirsin.

Alternatif olarak basit bir lokal sunucu:

```bash
python -m http.server 8000
```

Sonra tarayıcıda:

```text
http://localhost:8000
```

## Kontrol

```bash
npm run check
```

## GitHub Pages ile yayınlama

Bu repo GitHub Actions tabanlı Pages deploy kullanır. Ayar:

```text
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

`main` branch'e push sonrası `.github/workflows/deploy-pages.yml` workflow'u siteyi yayınlar.

## Kapsam

Site savunma, öğrenme, güvenli test, yasal laboratuvar, güvenlik otomasyonu, raporlama ve risk azaltma amaçlıdır.
