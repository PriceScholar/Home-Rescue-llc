// Google Tag Manager & Google Ads Conversion Tracking
// Safe to call anywhere; robust against SSR and missing window/dataLayer/gtag.

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

// Ensure dataLayer exists on window
function getGtmDataLayer(): any[] | null {
  if (typeof window === 'undefined') return null;
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
}

// Push any event into GTM dataLayer
export function trackGtmEvent(eventName: string, params: Record<string, any> = {}): void {
  const dataLayer = getGtmDataLayer();
  if (!dataLayer) return;

  const eventPayload = {
    event: eventName,
    page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
    timestamp: new Date().toISOString(),
    ...params,
  };

  dataLayer.push(eventPayload);
}

let lastWhatsAppTrackTime = 0;
let lastPhoneTrackTime = 0;
let lastBookingTrackTime = 0;
let lastGenericButtonTrackTime = 0;
let lastTrackedButtonText = '';

// WhatsApp Conversion for GTM + Google Ads
export function trackWhatsAppConversion(context?: string): void {
  const now = Date.now();
  if (now - lastWhatsAppTrackTime < 800) return; // Prevent double firing within 800ms
  lastWhatsAppTrackTime = now;

  // Google Ads conversion event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11209958724/fFpjCLWfiMIcEMTKqeEp',
    });
  }

  // GTM dataLayer event
  trackGtmEvent('whatsapp_click', {
    event_category: 'Contact',
    event_action: 'Click WhatsApp',
    event_label: context || 'WhatsApp Button',
    button_type: 'whatsapp',
    button_text: context || 'WhatsApp',
  });
}

// Phone Call Conversion for GTM + Google Ads
export function trackPhoneConversion(context?: string): void {
  const now = Date.now();
  if (now - lastPhoneTrackTime < 800) return; // Prevent double firing within 800ms
  lastPhoneTrackTime = now;

  // Google Ads conversion event
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-11209958724/fFpjCLWfiMIcEMTKqeEp',
    });
  }

  // GTM dataLayer event
  trackGtmEvent('phone_call_click', {
    event_category: 'Contact',
    event_action: 'Click Phone Call',
    event_label: context || 'Phone Call Button',
    button_type: 'phone',
    button_text: context || 'Call Now',
    phone_number: '+971524524295',
  });
}

// Booking & Service CTA Tracking for GTM
export function trackBookingClick(serviceName?: string, buttonText?: string): void {
  const now = Date.now();
  if (now - lastBookingTrackTime < 800) return;
  lastBookingTrackTime = now;

  trackGtmEvent('booking_click', {
    event_category: 'Booking',
    event_action: 'Click Booking CTA',
    event_label: serviceName || buttonText || 'Booking Button',
    service_name: serviceName || 'General',
    button_text: buttonText || 'Book Service',
    button_type: 'booking',
  });
}

// Service Card / Item Click Tracking for GTM
export function trackServiceClick(serviceName: string, serviceId?: string): void {
  trackGtmEvent('service_click', {
    event_category: 'Services',
    event_action: 'Click Service Card',
    event_label: serviceName,
    service_name: serviceName,
    service_id: serviceId || '',
    button_type: 'service',
  });
}

// Form Submission Tracking for GTM
export function trackFormSubmit(formName: string, extraData?: Record<string, any>): void {
  trackGtmEvent('form_submit', {
    event_category: 'Lead',
    event_action: 'Form Submitted',
    event_label: formName,
    form_name: formName,
    ...extraData,
  });
}

// Global button & CTA tracker ensuring EVERY single button on desktop & mobile view is tracked in GTM
export function initGlobalButtonTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  const handleGlobalClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // Find closest button or link
    const button = target.closest('button');
    const link = target.closest('a');
    const interactive = button || link;

    if (!interactive) return;

    const rawText = (interactive.innerText || interactive.textContent || interactive.getAttribute('aria-label') || '').trim();
    const buttonText = rawText.replace(/\s+/g, ' ').slice(0, 80);
    const href = link ? (link.getAttribute('href') || '') : '';
    const id = interactive.id || '';

    // Ignore clicks if identical button triggered within 500ms
    const now = Date.now();
    if (buttonText && buttonText === lastTrackedButtonText && now - lastGenericButtonTrackTime < 500) {
      return;
    }
    lastGenericButtonTrackTime = now;
    lastTrackedButtonText = buttonText;

    // 1. Phone Call Buttons / Links
    if (href.startsWith('tel:') || /call/i.test(buttonText)) {
      trackPhoneConversion(buttonText || 'Call Button');
      return;
    }

    // 2. WhatsApp Buttons / Links
    if (href.includes('wa.me') || href.includes('whatsapp') || /whatsapp/i.test(buttonText)) {
      trackWhatsAppConversion(buttonText || 'WhatsApp Button');
      return;
    }

    // 3. Booking / Quote / Inspection / Schedule Buttons
    if (/book|inspection|quote|schedule/i.test(buttonText)) {
      trackBookingClick(undefined, buttonText);
      return;
    }

    // 4. Consultation Buttons
    if (/consultation/i.test(buttonText)) {
      trackGtmEvent('consultation_click', {
        event_category: 'Consultation',
        event_action: 'Click Consultation Button',
        event_label: buttonText,
        button_text: buttonText,
        button_type: 'consultation',
      });
      return;
    }

    // 5. Form Submit Buttons
    if (interactive.getAttribute('type') === 'submit' || /submit|send message/i.test(buttonText)) {
      trackGtmEvent('form_button_click', {
        event_category: 'Form',
        event_action: 'Click Submit Button',
        event_label: buttonText || 'Submit',
        button_text: buttonText,
      });
      return;
    }

    // 6. ALL other buttons / interactive elements anywhere in the app
    trackGtmEvent('button_click', {
      event_category: 'Button Interaction',
      event_action: 'Click Button',
      event_label: buttonText || id || (link ? href : 'Button'),
      button_text: buttonText || 'Button',
      button_id: id,
      click_url: href,
    });
  };

  document.addEventListener('click', handleGlobalClick, { capture: true });
  return () => {
    document.removeEventListener('click', handleGlobalClick, { capture: true });
  };
}
