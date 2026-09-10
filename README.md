# ElMoHoops Rosters

Responsive roster application for the El Modena basketball website.

## Data source

Roster and coaching data come from the published Google Sheet configured in:

`js/config.js`

The application reads:

- `Configuration`
- `Rosters`
- `Coaches`

`Configuration` provides `CurrentSeason`. The app then filters the roster and coaches by the requested team and current season.

## Team URLs

The default team is Varsity:

`https://danny-oliva.github.io/elmo-rosters/`

You can load the other teams with the `team` query parameter:

- Varsity  
  `https://danny-oliva.github.io/elmo-rosters/?team=Varsity`

- Junior Varsity  
  `https://danny-oliva.github.io/elmo-rosters/?team=Junior%20Varsity`

- Frosh/Soph  
  `https://danny-oliva.github.io/elmo-rosters/?team=Frosh%2FSoph`

- Freshman  
  `https://danny-oliva.github.io/elmo-rosters/?team=Freshman`

These are the URLs that can eventually be embedded in the corresponding Wix pages.

## Spreadsheet columns

### Rosters

`Season | Team | Order | Jersey | Player Name | Class`

Jersey can be blank. The jersey badge only appears when a number is present.

### Coaches

`Season | Team | Order | Name | Title`

Coach Title is intentionally free text. Order controls the display hierarchy.

### Configuration

The application expects:

`CurrentSeason | 2026-2027`

in the Key / Value table.

## GitHub folder structure

```text
elmo-rosters/
├── index.html
├── README.md
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── config.js
    ├── sheets.js
    ├── roster.js
    ├── coaches.js
    └── utils.js
```

## Updating the website

Normal roster and coaching updates require no GitHub changes.

1. Edit the Google Sheet.
2. Keep the sheet published to the web.
3. Refresh the roster page.

To start a new season, add the new season's rows and change `CurrentSeason` on the Configuration tab.
