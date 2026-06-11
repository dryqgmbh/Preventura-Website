# Preventura – Custom Shopify Theme

Ein maßgeschneidertes Shopify-Theme (Online Store 2.0) für **Preventura** im
Bereich Gesundheit & Prävention. Das Design orientiert sich an modernen
Health-Tech-Shops (clean, viel Weißraum, große Typografie, sanfte Farbpalette,
abgerundete Buttons, klare „So funktioniert's"-Schritte).

## Struktur

```
├── assets/            # CSS & JS
│   ├── theme.css
│   └── theme.js
├── config/            # Theme-Einstellungen (Farben, Schriften, Layout)
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   └── theme.liquid   # Grundgerüst aller Seiten
├── locales/           # Übersetzungen (Deutsch = Standard)
│   ├── de.default.json
│   └── en.json
├── sections/          # Modulare, im Theme-Editor anpassbare Bausteine
│   ├── header-group.json / footer-group.json
│   ├── header.liquid / footer.liquid / announcement-bar.liquid
│   ├── hero.liquid / how-it-works.liquid / value-props.liquid
│   ├── featured-collection.liquid / testimonials.liquid / faq.liquid
│   ├── image-with-text.liquid / rich-text.liquid / newsletter.liquid
│   └── main-*.liquid   # Produkt-, Kollektions-, Warenkorb-, Seiten-Templates
├── snippets/          # Wiederverwendbare Teile (Icons, Produktkarte, Preis)
└── templates/         # JSON-Templates, die Sections zusammensetzen
```

## Funktionen

- **Startseite** mit Hero, Vorteilen, „So funktioniert's", Produkt-Kollektion,
  Bild-mit-Text, Testimonials, FAQ und Newsletter – alle per Drag & Drop im
  Theme-Editor anpassbar.
- **Produktseite** mit Bildergalerie, Variantenauswahl, Mengenwähler,
  AJAX-Warenkorb und Trust-Hinweisen.
- **Kollektions-, Warenkorb-, Such-, Seiten- und 404-Templates**.
- Vollständig **responsive** und **DSGVO-freundlich** aufgebaut (Newsletter via
  Shopify-Customer-Formular).
- Farben, Schriften, Layout-Breite und Eckenradius zentral über die
  Theme-Einstellungen steuerbar.

## Lokal entwickeln & deployen

Voraussetzung: [Shopify CLI](https://shopify.dev/docs/themes/tools/cli/install).

```bash
# Mit deinem Store verbinden und live in der Vorschau entwickeln
shopify theme dev --store deine-domain.myshopify.com

# Theme in den Store hochladen
shopify theme push --store deine-domain.myshopify.com

# Bestehendes Theme herunterladen
shopify theme pull --store deine-domain.myshopify.com
```

### Nächste Schritte im Shopify-Admin
1. Theme hochladen (`shopify theme push`) oder als ZIP unter **Onlineshop →
   Themes** importieren.
2. Unter **Navigation** das Menü `main-menu` mit den gewünschten Links füllen.
3. Produkte & Kollektionen anlegen und der Section „Produkt-Kollektion"
   auf der Startseite zuweisen.
4. Logo, Farben und Texte im **Theme-Editor** anpassen.

> Hinweis: Bilder (Hero, Schritte, Über-uns) werden im Theme-Editor hochgeladen
> – sie sind absichtlich nicht im Theme enthalten.
