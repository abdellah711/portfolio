export const getTechnologyColor = (tech: string) => {
  switch (tech.toLowerCase()) {
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
    default:
      return "text-gray-300 bg-gray-500/10";
  }
};
