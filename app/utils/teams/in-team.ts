export function inTeam(team) {
  return (teamMember) => {
    return (teamMember.teams ?? []).includes(team);
  };
}
