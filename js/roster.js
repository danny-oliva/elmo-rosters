import {
  cleanNumber,
  cleanText,
  escapeHtml,
  normalizeForCompare
} from "./utils.js";

export function getPlayers(rosterRows, season, team) {
  return rosterRows
    .filter(
      (row) =>
        normalizeForCompare(row.Season) === normalizeForCompare(season) &&
        normalizeForCompare(row.Team) === normalizeForCompare(team)
    )
    .sort((a, b) => cleanNumber(a.Order) - cleanNumber(b.Order));
}

export function renderRoster(players) {
  if (!players.length) {
    return `<p class="empty-message">No players are listed for this team and season.</p>`;
  }

  const cards = players.map((player) => {
    const name = escapeHtml(cleanText(player["Player Name"]));
    const playerClass = escapeHtml(cleanText(player.Class));
    const jersey = cleanText(player.Jersey);
    const jerseyMarkup = jersey
      ? `<span class="jersey-number" aria-label="Jersey number ${escapeHtml(jersey)}">#${escapeHtml(jersey)}</span>`
      : "";

    return `
      <article class="player-card${jersey ? " has-number" : ""}">
        ${jerseyMarkup}
        <h3 class="player-name">${name}</h3>
        ${playerClass ? `<span class="class-badge">${playerClass}</span>` : ""}
      </article>
    `;
  }).join("");

  return `<div class="roster-grid">${cards}</div>`;
}
