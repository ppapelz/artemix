export function getVariable(name: string): string {
  return window[name] || process.env[name];
}

export const BASE_NX_API_URL = getVariable("BASE_NX_API_URL");
export const SPT_API_DOMAIN = getVariable(
  "SPT_NX_API_DOMAIN"
);
export const SPT_NX_WEBSITE_DOMAIN = getVariable(
  "SPT_NX_WEBSITE_DOMAIN"
);