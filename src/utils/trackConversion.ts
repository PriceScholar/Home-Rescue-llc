// Fires the Google Ads "Contact / WhatsApp" conversion.
// Safe to call anywhere; does nothing if gtag isn't loaded.
export function trackWhatsAppConversion(): void {
  if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
    (window as any).gtag('event', 'conversion', {
      send_to: 'AW-11209958724/fFpjCLWfiMIcEMTKqeEp',
    });
  }
}
