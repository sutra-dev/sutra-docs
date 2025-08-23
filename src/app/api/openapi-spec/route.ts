import { ApiReference } from '@scalar/nextjs-api-reference';

const config = {
  url: '/sutra-api-service.json',
  theme: 'default' as const,
};

export const GET = ApiReference(config); 