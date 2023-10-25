import SHA256 from "./SHA256";

export default function generateCacheKey(payload: any): string {
    // Convert the payload to a JSON string
    const payloadString = JSON.stringify(payload);
  
    // Generate a unique hash using SHA-256
    const hash = SHA256(payloadString).toString();
  
    return `cache-${hash}`;
  }