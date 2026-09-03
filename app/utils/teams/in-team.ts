type TeamMember = {
  teams?: string[];
};

export function inTeam(team: string): (teamMember: TeamMember) => boolean {
  return (teamMember) => {
    return (teamMember.teams ?? []).includes(team);
  };
}
