import nextConfig from "eslint-config-next";

const config = [{ ignores: ["design/**", ".next/**"] }, ...nextConfig];

export default config;
