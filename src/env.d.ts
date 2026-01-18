/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_POSTHOG_API_KEY: string;
  readonly PUBLIC_STATIC_FORMS_KEY: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
