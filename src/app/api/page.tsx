import type { Metadata } from 'next';
import ScalarApiReference from './scalar-client';

export const metadata: Metadata = {
  title: 'API Reference | SUTRA',
  description: 'Complete API reference for SUTRA - powerful large language models with text completion, online search integration.',
};

export default function ApiReferencePage() {
  return <ScalarApiReference />;
} 