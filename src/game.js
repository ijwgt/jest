export default function sortPlayers(data) {
	return [...data].sort((a, b) => b.health - a.health);
  }