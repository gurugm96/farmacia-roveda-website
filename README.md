# Farmacia Roveda - Sito Web

Sito web della Farmacia Roveda della Dott.ssa Giovanna Roveda, Centallo (CN).

## Struttura del Progetto

```
farmacia-roveda-website/
├── index.html                 # Homepage
├── css/
│   └── style.css              # Foglio di stile principale
├── js/
│   └── main.js                # JavaScript principale
├── images/                    # Immagini (foto team, logo, ecc.)
├── pages/
│   ├── privacy-policy.html    # Informativa Privacy (GDPR)
│   └── cookie-policy.html     # Cookie Policy
└── README.md
```

## Caratteristiche

- **Design responsivo** — Mobile-first, ottimizzato per tutti i dispositivi
- **Accessibilità WCAG 2.1 AA** — Skip links, aria labels, focus management, prefers-reduced-motion
- **SEO** — Meta tags, Open Graph, dati strutturati Schema.org (Pharmacy)
- **Normative italiane** — Privacy Policy (GDPR/D.Lgs. 196/2003), Cookie Policy (Garante Privacy), obblighi informativi (D.Lgs. 70/2003)
- **Performance** — Nessuna dipendenza JS pesante, CSS custom, lazy loading iframe
- **Cookie Banner** — Conforme alle Linee Guida del Garante Privacy del 10 giugno 2021

## Dati della Farmacia

| Campo | Valore |
|-------|--------|
| Ragione Sociale | Farmacia Roveda della Dott.ssa Giovanna Roveda |
| Titolare | Dott.ssa Giovanna Roveda |
| Indirizzo | Via Ettore Garelli 12, 12044 Centallo (CN) |
| Telefono | 0171 214017 |
| P.IVA | 02805100043 |
| Email | info@farmaciaroveda.it |

## Social

- [Facebook](https://www.facebook.com/p/Farmacia-Roveda-Dottssa-Giovanna-100063650529000/)
- [Instagram](https://www.instagram.com/farmacia_roveda_centallo/)

## Come Avviare

Aprire `index.html` in un browser, oppure servire con qualsiasi web server statico:

```bash
# Con Python
python -m http.server 8000

# Con Node.js (npx)
npx serve .
```

## Personalizzazioni da Completare

- [ ] Inserire le foto reali del team (sostituire emoji segnaposto)
- [ ] Aggiungere il logo della farmacia in `images/`
- [ ] Verificare la P.IVA e il numero di iscrizione all'Ordine dei Farmacisti
- [ ] Verificare l'embed di Google Maps con le coordinate esatte
- [ ] Aggiungere favicon
- [ ] Configurare il dominio e l'hosting
