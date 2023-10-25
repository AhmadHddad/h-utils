import { Utf8EncodeTypes } from "../types";
import SHA256 from "./SHA256";


/**
 * Will generate a unique cache key for the passed payload
 * @date 10/25/2023 - 11:14:03 AM
 */
export default function generateCacheKey(payload: Utf8EncodeTypes): string {
    // Convert the payload to a JSON string
    const payloadString = JSON.stringify(payload);
  
    // Generate a unique hash using SHA-256
    const hash = SHA256(payloadString).toString();
  
    return `cache-${hash}`;
  }