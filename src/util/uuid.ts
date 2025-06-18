export function generateUUID(): string {
  // Get current timestamp in hex
  const timestamp = Date.now().toString(16);
  
  // Generate random segments
  const getRandomHex = (length: number) => {
    let result = '';
    for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 16).toString(16);
    }
    return result;
  };
  
  // Format as UUID-like string: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
  const uuid = [
    timestamp.substring(0, 8).padStart(8, '0'),           // First 8 chars from timestamp
    getRandomHex(4),                                       // 4 random chars
    '4' + getRandomHex(3),                                // Version identifier + 3 random chars
    (8 + Math.floor(Math.random() * 4)).toString(16) + getRandomHex(3),  // Variant + 3 random chars
    getRandomHex(12)                                      // 12 random chars
  ].join('-');
  
  return uuid;
}