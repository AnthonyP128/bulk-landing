import { getAllFreeContentItems } from './data/free-content-items.js';

const freeContentAliasRewrites = getAllFreeContentItems().map((item) => ({
    source: `/${item.slug}`,
    destination: `/free-content/${item.slug}`
}));

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    async rewrites() {
        return freeContentAliasRewrites;
    }
};

export default nextConfig;
