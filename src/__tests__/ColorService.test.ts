/**
 * Tests for ColorService
 */
import { ColorService } from '../services/ColorService';

describe('ColorService', () => {
  let colorService: ColorService;

  beforeEach(() => {
    colorService = new ColorService();
  });

  describe('getContrastTextColor', () => {
    it('should return white text for dark background colors', () => {
      // Test with black
      expect(colorService.getContrastTextColor('000000')).toBe('#ffffff');

      // Test with dark blue
      expect(colorService.getContrastTextColor('0000aa')).toBe('#ffffff');

      // Test with dark green
      expect(colorService.getContrastTextColor('00aa00')).toBe('#ffffff');
    });

    it('should return black text for light background colors', () => {
      // Test with white
      expect(colorService.getContrastTextColor('ffffff')).toBe('#000000');

      // Test with light yellow
      expect(colorService.getContrastTextColor('ffff00')).toBe('#000000');

      // Test with light red (bright enough)
      expect(colorService.getContrastTextColor('ff8080')).toBe('#000000');
    });

    it('should handle edge cases', () => {
      // Test with exactly the threshold (0xaa = 170 in decimal)
      expect(colorService.getContrastTextColor('aa0000')).toBe('#ffffff');
      expect(colorService.getContrastTextColor('ab0000')).toBe('#000000');
    });
  });
});
