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

  const label = context || 'WhatsApp Button';

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
    event_label: label,
    gtm_label: label,
    button_type: 'whatsapp',
    button_text: label,
  });
}

// Phone Call Conversion for GTM + Google Ads
export function trackPhoneConversion(context?: string): void {
  const now = Date.now();
  if (now - lastPhoneTrackTime < 800) return; // Prevent double firing within 800ms
  lastPhoneTrackTime = now;

  const label = context || 'Phone Call Button';

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
    event_label: label,
    gtm_label: label,
    button_type: 'phone',
    button_text: label,
    phone_number: '+971524524295',
  });
}

// Booking & Service CTA Tracking for GTM
export function trackBookingClick(serviceName?: string, buttonText?: string): void {
  const now = Date.now();
  if (now - lastBookingTrackTime < 800) return;
  lastBookingTrackTime = now;

  const label = serviceName || buttonText || 'Booking Button';

  trackGtmEvent('booking_click', {
    event_category: 'Booking',
    event_action: 'Click Booking CTA',
    event_label: label,
    gtm_label: label,
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
    gtm_label: serviceName,
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
    gtm_label: formName,
    form_name: formName,
    ...extraData,
  });
}

/**
 * Computes a meaningful GTM label from an element's text, aria-label, title, or attributes.
 */
export function getElementGtmLabel(el: HTMLElement): string {
  // If already assigned
  const existing = el.getAttribute('data-gtm-label');
  if (existing && existing.trim()) return existing.trim();

  // 1. aria-label
  const ariaLabel = el.getAttribute('aria-label');
  if (ariaLabel && ariaLabel.trim()) {
    return ariaLabel.trim().replace(/\s+/g, ' ').slice(0, 80);
  }

  // 2. title attribute
  const title = el.getAttribute('title');
  if (title && title.trim()) {
    return title.trim().replace(/\s+/g, ' ').slice(0, 80);
  }

  // 3. Text content
  const text = (el.innerText || el.textContent || '').trim();
  if (text) {
    return text.replace(/\s+/g, ' ').slice(0, 80);
  }

  // 4. Input elements (submit, button)
  if (el instanceof HTMLInputElement) {
    if (el.value && el.value.trim()) return el.value.trim().slice(0, 80);
    if (el.placeholder && el.placeholder.trim()) return el.placeholder.trim().slice(0, 80);
  }

  // 5. Anchor element href fallback
  if (el instanceof HTMLAnchorElement && el.getAttribute('href')) {
    const href = el.getAttribute('href')!;
    if (href.startsWith('tel:')) return `Call ${href.replace('tel:', '')}`;
    if (href.includes('wa.me')) return 'WhatsApp';
    return href.slice(0, 80);
  }

  // 6. ID fallback
  if (el.id) return el.id;

  return 'Clickable Element';
}

/**
 * Scans all clickable elements in the DOM and automatically assigns
 * a `data-gtm-label` attribute if not already present.
 */
export function scanAndAssignGtmLabels(root: Document | HTMLElement = document): void {
  if (typeof window === 'undefined' || !root) return;

  const selector = 'button, a, [role="button"], input[type="submit"], input[type="button"], [data-clickable="true"]';
  const elements = root.querySelectorAll<HTMLElement>(selector);

  elements.forEach((el) => {
    if (!el.hasAttribute('data-gtm-label') || !el.getAttribute('data-gtm-label')?.trim()) {
      const label = getElementGtmLabel(el);
      if (label) {
        el.setAttribute('data-gtm-label', label);
      }
    }
  });
}

/**
 * Global button & CTA tracker ensuring:
 * 1. All clickable elements are scanned and assigned `data-gtm-label`
 * 2. DOM mutations (modals, dropdowns, route views) are watched to auto-label newly added elements
 * 3. Every click pushes rich event data to GTM dataLayer with `gtm_label` & `data-gtm-label`
 */
export function initGlobalButtonTracking(): () => void {
  if (typeof window === 'undefined') return () => {};

  // Initial scan to assign data-gtm-label on all current elements
  scanAndAssignGtmLabels(document);

  // Set up MutationObserver to automatically assign data-gtm-label to dynamically created elements
  let observer: MutationObserver | null = null;
  if (typeof MutationObserver !== 'undefined' && document.body) {
    observer = new MutationObserver((mutations) => {
      let hasAddedNodes = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          hasAddedNodes = true;
          break;
        }
      }
      if (hasAddedNodes) {
        scanAndAssignGtmLabels(document.body);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  // Click capture listener
  const handleGlobalClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    // Find closest button, link, or role="button"
    const button = target.closest('button');
    const link = target.closest('a');
    const roleButton = target.closest<HTMLElement>('[role="button"], input[type="submit"], input[type="button"]');
    const interactive = button || link || roleButton;

    if (!interactive) return;

    // Ensure data-gtm-label is set on the clicked element
    let gtmLabel = interactive.getAttribute('data-gtm-label');
    if (!gtmLabel || !gtmLabel.trim()) {
      gtmLabel = getElementGtmLabel(interactive);
      interactive.setAttribute('data-gtm-label', gtmLabel);
    }

    const buttonText = gtmLabel;
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
        gtm_label: buttonText,
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
        event_label: buttonText,
        gtm_label: buttonText,
        button_text: buttonText,
      });
      return;
    }

    // 6. ALL other buttons / interactive elements anywhere in the app
    trackGtmEvent('button_click', {
      event_category: 'Button Interaction',
      event_action: 'Click Button',
      event_label: buttonText || id || (link ? href : 'Button'),
      gtm_label: buttonText || id || 'Button',
      button_text: buttonText || 'Button',
      button_id: id,
      click_url: href,
    });
  };

  document.addEventListener('click', handleGlobalClick, { capture: true });

  return () => {
    document.removeEventListener('click', handleGlobalClick, { capture: true });
    if (observer) {
      observer.disconnect();
    }
  };
}
