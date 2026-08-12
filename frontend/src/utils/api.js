/**
 * Helper to safely parse JSON responses from fetch requests.
 * Prevents raw technical system errors (like Vercel FUNCTION_INVOCATION_FAILED or FUNCTION_PAYLOAD_TOO_LARGE)
 * from ever being shown to end users, replacing them with clear, friendly layman messages.
 */
export async function safeParseJson(response, fallbackMsg = 'We are experiencing a temporary server connection issue. Please try again in a few moments.') {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      const data = await response.json();
      return data;
    } catch {
      throw new Error(fallbackMsg);
    }
  }

  // Handle non-JSON plain text / HTML server error responses
  try {
    const text = await response.text();
    const cleanText = text ? text.trim() : '';

    // If Vercel rejected request body payload as too large (over 4.5 MB)
    if (cleanText.includes('FUNCTION_PAYLOAD_TOO_LARGE') || cleanText.includes('Request Entity Too Large') || response.status === 413) {
      throw new Error('The uploaded documents are too large (total limit is 3.5 MB). Please choose smaller files or photos.');
    }

    // Detect technical system error terms (Vercel crashes, HTML error pages, node error traces)
    const isTechnicalError =
      cleanText.startsWith('<') ||
      cleanText.includes('<html>') ||
      cleanText.includes('FUNCTION_INVOCATION_FAILED') ||
      cleanText.includes('FUNCTION_PAYLOAD_TOO_LARGE') ||
      cleanText.includes('Request Entity Too Large') ||
      cleanText.includes('500 Internal') ||
      cleanText.includes('ETIMEDOUT') ||
      cleanText.includes('ECONNREFUSED') ||
      cleanText.includes('Vercel') ||
      cleanText.includes('bom1::');

    if (!isTechnicalError && cleanText.length > 0 && cleanText.length < 100) {
      throw new Error(cleanText);
    }
  } catch (err) {
    if (
      err.message &&
      !err.message.toLowerCase().includes('json') &&
      !err.message.includes('FUNCTION_INVOCATION_FAILED') &&
      !err.message.includes('FUNCTION_PAYLOAD_TOO_LARGE') &&
      !err.message.includes('bom1::')
    ) {
      throw err;
    }
  }

  throw new Error(fallbackMsg);
}

/**
 * Client-side image compression helper.
 * Automatically resizes and compresses user-uploaded images (JPEG, PNG, WEBP)
 * before upload to stay within Vercel's serverless payload limits.
 */
export async function compressImage(file, maxWidth = 1200, quality = 0.7) {
  if (!file || !file.type || !file.type.startsWith('image/')) {
    return file; // Don't compress non-image files (like PDFs)
  }

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob || blob.size >= file.size) {
              resolve(file); // Return original if compression didn't reduce size
            } else {
              const compressedFile = new File([blob], file.name, {
                type: file.type || 'image/jpeg',
                lastModified: Date.now(),
              });
              resolve(compressedFile);
            }
          },
          file.type || 'image/jpeg',
          quality
        );
      };
      img.onerror = () => resolve(file);
    };
    reader.onerror = () => resolve(file);
  });
}
