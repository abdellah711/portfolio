export const getTechnologyColor = (tech: string) => {
  switch (tech.replaceAll(".", "").toLowerCase()) {
    case "react":
    case "typescript":
    case "docker":
      return "text-blue-400 bg-blue-500/10";
    case "nextjs":
    case "express":
      return "text-gray-100 bg-gray-100/10";
    case "tailwindcss":
      return "text-cyan-500 bg-cyan-500/10";
    case "redis":
      return "text-red-400 bg-red-500/10";
    case "sqlite":
      return "text-yellow-400 bg-yellow-500/10";
    case "nodejs":
    case "mongodb":
      return "text-green-500 bg-green-500/10";
    case "gemini api":
      return "text-purple-500 bg-purple-500/10";
    case "drizzle orm":
      return "text-lime-500 bg-lime-500/10";
    case "shadcn":
      return "text-stone-300 bg-stone-500/10";
    case "ai sdk":
      return "text-indigo-300 bg-indigo-500/10";
    case "better auth":
      return "text-orange-300 bg-orange-500/10";
    case "postgres":
      return "text-blue-500 bg-blue-500/10";
    default:
      return "text-gray-300 bg-gray-500/10";
  }
};
