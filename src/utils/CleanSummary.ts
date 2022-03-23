export default function cleanSummary(summary: string): string {
  const regPattern = /<[^<>]*>/g;
  return summary.replace(regPattern, "");
}
