import type { PostHog } from "posthog-js";

declare global {
  interface Window {
    posthog: PostHog;
    __posthog_initialized: boolean;
  }
}
export const importPostHog = async () => {
  const posthog = await import("posthog-js").then((module) => module.default);
  window.posthog = posthog;
  if (!window.__posthog_initialized) {
    window.__posthog_initialized = true;
    posthog.init(import.meta.env.PUBLIC_POSTHOG_API_KEY, {
      api_host: "https://us.i.posthog.com",
      defaults: "2025-11-30",
      persistence: "memory",
    });
  }
  return posthog;
};

export const captureEvent: PostHog["capture"] = (...args) => {
  if (!window.posthog) return;
  return window.posthog.capture(...args);
};
