import type { Montacargas } from '../../interfaces/montacargas';
import { datos } from '../../data/montacargas-data';

export async function GET(): Promise<Response> {
  const respuesta: Montacargas[] = datos;
  
  return new Response(JSON.stringify(respuesta), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}