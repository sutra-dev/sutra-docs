import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';
import yaml from 'yaml';

export async function GET() {
  try {
    // Read the YAML file
    const filePath = path.join(process.cwd(), 'src', 'data', 'sutra.yml');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Parse YAML to JSON
    const openApiSpec = yaml.parse(fileContent);
    
    return NextResponse.json(openApiSpec, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error loading OpenAPI spec:', error);
    return NextResponse.json(
      { error: 'Failed to load OpenAPI specification' },
      { status: 500 }
    );
  }
} 