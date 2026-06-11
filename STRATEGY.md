# Preventura — Strategie- & CRO-Briefing

> Arbeitsdokument für Website, Conversion-Optimierung, Brand & rechtliche
> Leitplanken. Basis: Analyse von **Rythm Health** (Modell/Funnel),
> **More Nutrition & ESN / The Quality Group** (DTC-CRO & Brand) sowie der
> deutschen Rechtslage (**HWG**, **HCVO**, **IVDR/MPDG**).
>
> Stand: Juni 2026. Lebendes Dokument — bitte fortschreiben.

---

## 0. Kurzfassung (TL;DR)

- **Modell** = Rythm Health: monatliches At-Home-Bluttest-Abo mit Tracking über
  Zeit. Unsere Hauptprodukte: **Core** & **Core Plus**.
- **CRO/Brand/VC-Mechanik** = More Nutrition / ESN: Bundles → AOV, Abo + In-App
  Add-ons → LTV, Referral + Erstbesteller-Code → CAC, klare Brand-Mission,
  aggressives (aber sauberes) Performance Marketing.
- **Rechtlicher Korridor** ist Pflicht: Tests sind **IVD** (HWG), Add-ons/
  Supplement-Aussagen unterliegen der **HCVO**. Copy bewegt sich im Feld
  „Klarheit / Verstehen / Tracking" — **keine** Diagnose-/Heilversprechen,
  **keine** Angstwerbung.

---

## 1. Produktarchitektur (Core / Core Plus + App-Add-ons)

Klassisches **„Good / Better"** mit bewusst nur **zwei** Optionen auf der
Website (gegen Choice-Paralysis), Add-on-Upsell in der App.

```
┌──────────────────────┐     ┌───────────────────────────┐
│  PREVENTURA CORE      │     │  PREVENTURA CORE+ ★ BELIEBT│
│  11 Biomarker         │     │  16 Biomarker              │
│  169 € (Einmalkauf)   │     │  269 € (Einmalkauf)        │
│  + Add-ons in App ▸   │     │  inkl. erweitertem Umfang  │
└──────────────────────┘     └───────────────────────────┘
        │                              ▲
        │  In-App-Upsell               │  auf der Website als
        ▼                              │  "Beliebtester Plan" geankert
  Männer Gesundheit · Frauen Gesundheit · Schilddrüse Pro  (nur auf Core)
```

**Regeln:**
- Website zeigt **Core** und **Core+** als die zwei Flaggschiff-Produkte.
- **Core+** wird als „Beliebtester Plan / bestes Preis-Leistungs-Verhältnis"
  geankert → hebt die AOV.
- Add-ons (**Männer Gesundheit**, **Frauen Gesundheit**, **Schilddrüse Pro**)
  werden auf der Website nur *erwähnt* („In der App erweiterbar"), nicht im
  Checkout verkauft → schlanker Checkout (Conversion) + Post-Purchase-Upsell
  (LTV).
- Add-ons hängen **nur an Core** (Core+ enthält den erweiterten Umfang teils
  bereits, u. a. TSH). → *Offener Punkt:* Schilddrüse Pro (FT3/FT4/TPO-AK)
  ergänzt auch Core+ sinnvoll — mit ZOTZ klären, ob als Core+-Add-on sinnvoll.

### Produkt-Detail (website-relevant: Biomarker + VK)

**Preventura Core — 169 € (Einmalkauf) | 11 Biomarker**
HbA1c · Gesamtcholesterin · HDL · LDL · Triglyceride · ApoB · hs-CRP ·
Cystatin C · Kreatinin · GPT/ALT · GGT
→ Fokus: Stoffwechsel, Herz-Kreislauf, Entzündung, Nieren-/Leberfunktion.

**Preventura Core+ — 269 € | 16 Biomarker**
Alle 11 Core-Marker **plus**: Vitamin D (25-OH) · Ferritin · TSH · Holo-TC ·
**Lp(a)** (nur **einmalig** beim ersten Core+, da genetisch stabil)
→ „Core+ Standard" (Folgetests) ohne erneute Lp(a)-Messung, VK bleibt 269 €.
→ Website-Hinweis: „inkl. einmaliger Lp(a)-Bestimmung als genetischer Baseline".

**Add-ons (nur in der App, auf Core aufsattelbar):**
| Add-on | VK | Biomarker |
|---|---|---|
| Männer Gesundheit | 99 € | Testosteron · SHBG · LH · FSH · Estradiol/E2 · Prolaktin (6) |
| Frauen Gesundheit | 129 € | Estradiol/E2 · Progesteron · LH · FSH · Prolaktin · Testosteron · SHBG (7) |
| Schilddrüse Pro | 59 € | FT3 · FT4 · TPO-AK/MAK (3) |

### Angebotsstruktur: Einmalkauf + Abos

Drei Kaufwege — Einmalkauf als niedrigschwelliger Einstieg, zwei Abos als
wiederkehrender Umsatz (das VC-relevante Herzstück):

| Angebot | Preis | Inhalt / Jahr | Test-Ökonomie |
|---|---|---|---|
| **Einmalkauf Core** | 169 € | 1× Core | 169 €/Test |
| **Einmalkauf Core+** | 269 € | 1× Core+ | 269 €/Test |
| **Abo Premium** | 99 € 1. Monat, dann **20 €/Monat** | 2× Core+ | ≈ 120 €/Test (Y2+) |
| **Abo Complete** | 99 € 1. Monat, dann **55 €/Monat** | 2× Core + 2× Core+ | ≈ 165 €/Test |

- **Premium** Jahresumsatz: Y1 ≈ 319 € (99 + 11×20), Y2+ ≈ 240 €.
- **Complete** Jahresumsatz: Y1 ≈ 704 € (99 + 11×55), Y2+ ≈ 660 €.
- **„Erster Monat 99 €"** ist clever: deckt früh Kit-/Erst-Logistikkosten und
  filtert Abbrecher, bevor sie Marge kosten.

**Website-Empfehlung (CRO):** Abo als Default anzeigen (Toggle „Abo / einmalig"),
Complete oder Premium als „Beliebt" ankern, Einmalkauf als sekundärer Weg. So
maximieren wir wiederkehrenden Umsatz, ohne Trial-Käufer zu verlieren.

### ⚠️ Noch zu klären
- **Einzelne Add-on-Marker** final mit **ZOTZ** (Labor) bestätigen.
- Mindestlaufzeit / Pausier- & Kündigungslogik der Abos.
- Versand-/Test-Kadenz der Abos (z. B. Premium alle 6 Monate, Complete
  quartalsweise) — für Logistik & Narrativ definieren.

---

## 2. Was wir von Rythm Health übernehmen (Funnel)

**Ihr Modell:** ~79 $/Monat, 25+ Biomarker, schmerzfreies Device, Ergebnisse in
3 Tagen, bis 90 Tage pausierbar, jederzeit kündbar, HSA/FSA.

**Übernommene Conversion-Hebel:**
1. **Preis-Reframe:** „Einmal-Test (oft teuer) = Momentaufnahme — wir liefern
   kontinuierliches Tracking." Macht das Abo psychologisch zum No-Brainer.
2. **Trend statt Snapshot:** Kernnutzen = „verstehe, wie sich dein Körper *über
   Zeit* entwickelt" → rechtfertigt das Abo.
3. **Friktion eliminieren:** „einfach & schmerzarm", „bequem von Zuhause",
   „kostenlose Rücksendung", „Ergebnisse in X Tagen".
4. **Datenschutz prominent:** Verschlüsselung / DSGVO — bei Gesundheitsdaten
   conversion-kritisch (und für DE ein Vorteil ggü. US-Anbietern).
5. **Risiko-Umkehr:** „jederzeit pausierbar/kündbar, keine Gebühren".
6. **Social Proof:** Trustpilot, Testimonials mit echten Gesichtern, „X.000+
   durchgeführte Tests".

---

## 3. Was wir von More Nutrition / ESN übernehmen (CRO / Brand / VC)

The Quality Group (ESN + More Nutrition, >1 Mrd. € Umsatz, CVC-backed,
~300 Influencer, ~5 Mio. Reach/Tag) — die DTC-Mechanik:

| Hebel | Bei TQG konkret | Umsetzung Preventura |
|---|---|---|
| **Bundles → AOV** | Eigene Bundles-Collection, Bundle-Aktionen | Core + Add-on-/Mehrmonats-Pakete |
| **Free-Shipping-Schwelle** | Frei ab 55 € (sonst 4,90 €) | Schwelle knapp über Core-Preis |
| **Referral** | 15 € / 15 €, ab 60 € MBW | „Freunde werben" → CAC senken |
| **Permanenter Code + Flash Sales** | `FITNEWS` 10 % dauerhaft, 20–50 % Aktion | Erstbesteller-Code für Ads |
| **Influencer / Social Commerce** | 300 Creator | Creator-Content als LP-/Ad-Asset |
| **Klare Mission** | „Smart Swap", „lecker Kalorien sparen" | EINE einprägsame Kernbotschaft |

**Allgemeine DTC-CRO-Mechanik (beide perfektioniert):**
- **Mobile-first** (~70 % Traffic) — alles für Daumen-Bedienung.
- **Sticky Add-to-Cart** auf Produkt-/Plan-Seiten.
- **Social Proof an Friktionspunkten** (z. B. „12.000+ Kund:innen" neben dem
  Preis, „Gratis-Rückversand" neben dem Button).
- **Bestseller-/„Beliebt"-Label**, hochauflösende Bilder + Video.
- **Lead-Capture** (Newsletter/Quiz) für Retargeting im Performance Marketing.

---

## 4. ⚖️ Rechtliche Leitplanken (Health Claims DE)

> **Kein Rechtsrat.** Fundierte Einordnung — finale Freigabe der konkreten
> Formulierungen **muss** durch eine auf **Heilmittelwerberecht** spezialisierte
> Kanzlei erfolgen (abmahn-/bußgeldrelevant, besonders bei Performance-Ads).

### A) Bluttests = In-vitro-Diagnostika (IVD)
- Reguliert nach **EU-IVDR 2017/746** + deutschem **MPDG** → **CE-Kennzeichnung**
  zwingend; Selbsttests brauchen die passende Konformitätsbewertung.
- Werbung fällt unter das **HWG**:
  - **§ 3 HWG (Irreführung):** keine nicht vorhandene Wirkung behaupten, keine
    garantierten Erfolge.
  - **§ 11 HWG (Laienwerbung):** **keine Angstwerbung** („ohne Test gefährdest
    du deine Gesundheit"), keine missbräuchliche Vorher/Nachher-Suggestion,
    Vorsicht bei „von Ärzten empfohlen".
  - IVD zur Krankheitserkennung sind teils von Werbeverboten ausgenommen —
    Formulierungen anwaltlich prüfen lassen.

### B) App-Add-ons & Supplement-Aussagen = HCVO (EU 1924/2006)
- Nur **EFSA-zugelassene** Health Claims (z. B. „Vitamin C trägt zu einer
  normalen Funktion des Immunsystems bei" — an Bedingungen geknüpft).
- **Verboten:** Krankheit heilen/lindern/vorbeugen suggerieren (Arzneimitteln
  vorbehalten).

### Copy-Korridor (Daumenregeln)
**✅ Erlaubt / sicher:**
- „Verschaffe dir **Klarheit** über deine Werte."
- „**Verstehe** deinen Körper / deine Biomarker."
- „**Tracking** über Zeit, **informierte** Entscheidungen."
- Biomarker neutral benennen + Verweis auf **ärztliche Einordnung**.

**❌ Vermeiden:**
- „erkennt / verhindert / heilt / lindert Krankheit X"
- „diagnostiziert", „ersetzt den Arztbesuch"
- „du musst …, sonst …" (Angst)
- Garantierte Ergebnisse / unbelegte Wirkversprechen

**Vorteil als Asset:** „DSGVO-konform", „zertifizierte Labore in DE/EU" sind hier
*stärkere* Trust-Signale als bei US-Wettbewerbern.

---

## 5. Website-Bauplan (Conversion-orientiert)

### Homepage (Reihenfolge)
1. **Hero** — eine Kernbotschaft, Trust-Badges, 2 CTAs („Plan wählen" / „So
   funktioniert's").
2. **Plan-Vergleich Core vs. Core Plus** (Herzstück, weit oben, Core Plus als
   „Beliebt" geankert).
3. **So funktioniert's** (3 Schritte) — Friktion abbauen.
4. **Was wir messen** (Biomarker) — neutral, mit Hinweis auf ärztliche
   Einordnung.
5. **Trust-Leiste** — Labore, DSGVO, „X.000+ Tests".
6. **Reframe** — „Einmal-Test vs. kontinuierliches Tracking".
7. **Testimonials + Trustpilot**.
8. **Add-on-Teaser** (Men's / Women's / Thyroid Plus — „in der App").
9. **FAQ** — auch rechtlich sauber: was der Test *ist* und *nicht* ist.
10. **Lead-Capture / Newsletter** — für Retargeting.

### Plan-/Produktseite (CRO)
- **Sticky Add-to-Cart** (mobil!), Plan-Toggle, „Most Popular"-Badge.
- Social Proof + Trust-Badges **direkt am Button**.
- Risiko-Umkehr („jederzeit kündbar"), Versand-Schwelle, Erstbesteller-Hook.
- Hochwertige Produktbilder/Device-Video.

---

## 6. CRO-Backlog (priorisiert)

| Prio | Feature | Wirkung | Aufwand |
|---|---|---|---|
| P0 | Plan-Vergleich Core/Core Plus | Conversion + AOV | M |
| P0 | Produktseite + Sticky ATC (mobil) | Conversion | M |
| P0 | Rechtssichere Copy/FAQ | Risiko | S |
| P1 | Trust-Leiste + Social Proof an Friktionspunkten | Conversion | S |
| P1 | Biomarker-Sektion | Vertrauen | M |
| P1 | Lead-Capture (Newsletter/Quiz) | Retargeting/CAC | S |
| P2 | Referral-Programm | CAC | M |
| P2 | Bundles / Mehrmonats-Pakete | AOV | M |
| P2 | Abo-Logik (Shopify Subscriptions) | LTV | L |
| P3 | Event-Tracking (Meta/Google) Hooks | Ad-Performance | M |
| P3 | Influencer-/UGC-Galerie | Social Proof | S |

---

## 7. VC-Readiness — Signale, die zählen
- **Unit Economics:** AOV (Bundles/Core Plus), LTV (Abo + In-App-Add-ons),
  CAC (Referral + Erstbesteller-Code + Performance Ads).
- **Differenzierung:** EU-/DSGVO-Trust + sauberes Health-Claim-Setup als Moat
  ggü. US-Anbietern.
- **Skalierbarkeit:** schlanker Checkout, App-Upsell-Pfad, Creator-Engine.
- **Messbarkeit:** sauberes Tracking, klare Funnel-KPIs.

---

## 8. Offene Punkte / nächste Schritte
- [x] Core/Core+/Add-on-Daten befüllt (Biomarker + VK) → §1, Anhang A.
- [x] Modell festgelegt: Einmalkauf (169/269 €) + Abo Premium (20 €/Mo) + Complete (55 €/Mo).
- [ ] **Premium-Marge prüfen/entscheiden** (Preis anheben, GOÄ verhandeln oder als Funnel-Anker akzeptieren) → Anhang A.
- [ ] Add-on-Marker final mit ZOTZ bestätigen + GOÄ-Faktor verhandeln (Ziel ≤0,4).
- [ ] Vollkosten ergänzen (Kit, Versand, Lab-Handling, App/Infra, CAC) → CM2/CM3, LTV:CAC.
- [ ] Anwaltliche Freigabe der Claims (HWG/HCVO).
- [ ] Brand-Farben/CI final festlegen.
- [ ] Bild-/Video-Assets (Hero, Device, Schritte) bereitstellen.
- [ ] Entscheidung: Abo-App (Shopify Subscriptions) + ggf. Headless-App-Anbindung.
- [ ] Klären: Schilddrüse Pro auch als Core+-Add-on?

---

---

## Anhang A — Interne Kalkulation & Margen 🔒 VERTRAULICH

> **Diese Daten gehören NICHT auf die Website.** Labor-EK, GOÄ-Faktoren und
> Margen sind intern. Auf der Website erscheinen ausschließlich die **VK-Preise**.
> (Quelle: Kundenangabe Juni 2026, Add-on-Marker noch final mit ZOTZ zu
> bestätigen.)

**Annahme Payment:** 1,5 % + 0,25 € pro Zahlung. „EK" = Labor-EK + Payment.
Deckungsbeitrag (DB) = VK brutto − EK. **Wichtig:** Kit, Versand/Rückversand,
App-/Infra-Kosten und **CAC** sind hier **noch nicht** enthalten.

| Produkt | VK | EK @0,5 | DB @0,5 | EK @0,4 | DB @0,4 | EK @0,3 | DB @0,3 |
|---|---|---|---|---|---|---|---|
| Core | 169 € | 34,27 € | 134,73 € (80 %) | 27,97 € | 141,03 € (83 %) | 21,68 € | 147,32 € (87 %) |
| Core+ Initial | 269 € | 87,07 € | 181,93 € (68 %) | 70,51 € | 198,49 € (74 %) | 53,96 € | 215,04 € (80 %) |
| Männer Gesundheit | 99 € | 58,88 € | 40,12 € (41 %) | 47,44 € | 51,56 € (52 %) | 36,00 € | 63,00 € (64 %) |
| Frauen Gesundheit | 129 € | 73,32 € | 55,68 € (43 %) | 59,08 € | 69,92 € (54 %) | 44,84 € | 84,16 € (65 %) |
| Schilddrüse Pro | 59 € | 29,71 € | 29,29 € (50 %) | 23,99 € | 35,01 € (59 %) | 18,27 € | 40,73 € (69 %) |

### Strategische Einordnung (deckt sich mit deiner Einschätzung, plus Nuance)

1. **Core & Core+ sind die Marge.** Bei 77–86 % bzw. 68–80 % DB sind sie die
   profitablen Anker — und genau das, was wir auf der Website pushen. Core+ als
   „Beliebt" zu ankern, zieht den Mix nach oben (höhere AOV, besserer absoluter
   DB pro Bestellung).

2. **Add-ons fast immer im *inkrementellen* Kontext bewerten — nicht isoliert.**
   Add-ons sitzen auf **derselben Blutprobe + Logistik + bereits bezahltem CAC**
   eines Core-Kunden. Ihr Labor-EK *ist* damit nahezu ihr **voller Grenzkosten**-
   block — es kommen kaum Kit/Versand/CAC obendrauf. Heißt: Der DB eines Add-ons
   ist **Expansion Revenue zu Grenzkosten** auf einem schon akquirierten Kunden.
   - **Frauen Gesundheit** isoliert „nur" 43 % @0,5 — *aber* als Aufsatz auf
     Core sind die ~56 € DB nahezu reiner Zusatzgewinn ohne Mehr-CAC. Das macht
     sie trotz schwächerer Stückmarge zu einem **starken LTV-/AOV-Hebel** (und
     marketingseitig ohnehin top). Bei 0,4 wird's mit ~70 € DB klar attraktiv.
   - **Schilddrüse Pro** (59 €) und **Männer Gesundheit** (99 €) sind als
     Launch-Add-ons wirtschaftlich solide — Zustimmung zu deiner Einschätzung.

3. **GOÄ-Faktor verhandeln zahlt sich überproportional aus.** Der Sprung von
   0,5 → 0,4 hebt v. a. die Add-on-DBs deutlich (Frauen +14 €, Männer +11 €).
   Verhandlungsziel mit ZOTZ: möglichst **≤ 0,4** für die hochpreisigen Marker
   (Vitamin D, Holo-TC, Testosteron, Estradiol, Progesteron).

4. **Echte Contribution Margin braucht Vollkosten.** Vor VC-Gesprächen die
   Tabelle um **Kit-Kosten, Versand/Rückversand, Lab-Handling, App/Infra und
   CAC** ergänzen → daraus echte CM2/CM3 und LTV:CAC ableiten. (→ Backlog)

### Abo-Ökonomie 🚩 (Premium ist margendünn — bitte prüfen)

DB **vor Fulfillment (Kit/Versand/Rücksendung/Handling) und CAC**, Core+ als
„Standard" (ohne Lp(a)) gerechnet, GOÄ 0,5:

| Abo | Umsatz Y2+ | Lab-EK Y2+ | Payment Y2+ | DB Y2+ (vor Fulfillment+CAC) | Tests/Jahr |
|---|---|---|---|---|---|
| Premium | 240 € | 2× 74,04 = 148,08 € | ≈ 6,60 € | **≈ 85 €** | 2 (2× Core+) |
| Complete | 660 € | 62,96 + 148,08 = 211,04 € | ≈ 12,90 € | **≈ 436 €** | 4 (2× Core + 2× Core+) |

**Das Problem bei Premium (20 €/Monat):**
- Bei 2 Tests/Jahr fallen **2× Kit + Versand + Rücksendung + Lab-Handling** an.
  Schon bei ~25 €/Test Fulfillment bleibt Y2+ nur **~35 € DB für das ganze Jahr —
  und das ist *vor* CAC.** Damit ist Premium real grenzwertig bis defizitär.
- Premium preist Core+ effektiv auf **~120 €/Test** (Y2+) — gegenüber 269 €
  Einmalkauf ein sehr steiler Rabatt, der margenstarke Einmalkäufe
  **kannibalisieren** kann.

**Empfehlungen (eine oder mehrere):**
1. **Premium auf ~25–29 €/Monat** anheben → schützt Marge, Rabatt vs. Einmalkauf
   bleibt attraktiv.
2. **GOÄ ≤ 0,4** mit ZOTZ verhandeln → Premium-DB Y2+ steigt deutlich.
3. Premium **bewusst als margenarmer Funnel-/Retention-Anker** akzeptieren und
   Profit über **Add-on-Upsells** (App) + Upgrade auf Complete holen — dann aber
   in den Unit Economics klar so deklarieren.
4. **Complete ist der Profit-Anker** (≈ 436 € DB vor Fulfillment/CAC) → im
   Pricing-/CRO-Layout nach vorne stellen.

> Sobald Fulfillment-Kosten vorliegen, rechne ich CM2/CM3 und LTV:CAC je Abo
> sauber durch.

### Lp(a)-Logik (Margenvorteil bei Folgetests)
Lp(a) wird nur **einmalig** gemessen → ab dem 2. Core+ entfällt der Lp(a)-EK
(0,5: −8,74 €), VK bleibt 269 €. Folgetests von Core+ sind damit **margenstärker**
als der Initialtest — gutes Retention-/LTV-Argument.

---

## Quellen
- Rythm Health: <https://rythmhealth.com/> · FAQ <https://support.rythmhealth.com/en/articles/10332107-faq-most-asked> · Reviews <https://www.trustpilot.com/review/rythmhealth.com>
- The Quality Group / ESN / More Nutrition: OMR <https://omr.com/de/daily/the-quality-group-esn-smart-nutrition-christian-wolf-stefan-smalla> · WiWo <https://www.wiwo.de/unternehmen/handel/esn-und-more-nutrition-the-quality-group-ist-der-grosse-gewinner-des-proteinbooms/100159232.html> · More Nutrition Bundles <https://morenutrition.de/collections/bundles> · Referral <https://www.more-nutrition.de/pages/refer-a-friend>
- DTC-CRO: Justuno <https://www.justuno.com/blog/dtc-food-beverage-strategies/> · Shopify <https://www.shopify.com/blog/expert-advice-improve-product-pages>
- Recht: HWG <https://www.gesetze-im-internet.de/heilmwerbg/BJNR006049965.html> · § 11 HWG <https://www.gesetze-im-internet.de/heilmwerbg/__11.html> · BVMed <https://www.bvmed.de/themen/recht/hwg/kommunikation-und-werbung-fuer-medizinprodukte-was-ist-erlaubt-was-ist-verboten> · HCVO (Händlerbund) <https://www.haendlerbund.de/de/ratgeber/branchen/3949-health-claims-verordnung>
