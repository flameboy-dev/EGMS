/**
 * Helper to safely parse JSON responses from fetch requests.
 * Prevents raw SyntaxError ("Unexpected token... is not valid JSON") from being shown to users
 * when backend or cloud proxy returns non-JSON plain text or HTML error pages.
 */
export async function safeParseJson(response, fallbackMsg = 'Server error occurred. Please try again later.') {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      const data = await response.json();
      return data;
    } catch {
      throw new Error(fallbackMsg);
    }
  }

  // Handle non-JSON plain text / HTML responses
  try {
    const text = await response.text();
    // If response is HTML or unformatted server crash message
    if (text.startsWith('<') || text.includes('<html>') || text.toLowerCase().includes('500 internal server error')) {
      throw new Error(fallbackMsg);
    }
    if (text && text.trim().length > 0 && text.trim().length < 150) {
      throw new Error(text.trim());
    }
  } catch (err) {
    if (err.message && !err.message.toLowerCase().includes('json')) {
      throw err;
    }
  }

  throw new Error(fallbackMsg);
}
