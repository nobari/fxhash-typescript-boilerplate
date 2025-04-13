/**
 * ColorService - Responsible for color-related operations
 * Following the Single Responsibility Principle
 */

/**
 * Interface for color service operations
 * Follows Interface Segregation Principle
 */
export interface IColorService {
  /**
   * Determines the contrast text color (black or white) based on background color
   * @param backgroundColor - The background color in hex format (without # prefix)
   * @returns The contrast text color in hex format including # prefix
   */
  getContrastTextColor(backgroundColor: string): string;
}

/**
 * Implementation of the color service
 */
export class ColorService implements IColorService {
  /**
   * Determines the contrast text color (black or white) based on background color
   * @param backgroundColor - The background color in hex format (without # prefix)
   * @returns The contrast text color in hex format including # prefix
   */
  public getContrastTextColor(backgroundColor: string): string {
    // Parse the red component and check if it's bright enough for black text
    return ((parseInt(backgroundColor, 16) >> 16) & 0xff) > 0xaa
      ? "#000000"
      : "#ffffff";
  }
}

// Singleton instance for convenient usage
const colorService = new ColorService();
export default colorService; 