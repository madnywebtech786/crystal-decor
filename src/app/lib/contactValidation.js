import { services } from '../constants/servicesData';

export const SERVICE_OPTIONS = Object.keys(services);

const EMAIL_REGEX = /^[\w.-]+@[\w-]+\.[a-z]{2,}$/i;
const PHONE_REGEX = /^\+?\d{10,15}$/;
const CONTROL_CHARS_REGEX = new RegExp('[\\x00-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]', 'g');
const MAX_LENGTHS = {
  firstName: 50,
  lastName: 50,
  email: 254,
  phone: 20,
  message: 2000,
};

function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  // Strip HTML tags and control characters so nothing gets echoed back
  // verbatim into the email template or a future HTML surface.
  return value
    .replace(/<[^>]*>/g, '')
    .replace(CONTROL_CHARS_REGEX, '')
    .trim();
}

function sanitizePhone(value) {
  // Accept human-typed formats like "+1 (587) 255-2121" by dropping
  // spaces, parentheses, hyphens, and dots — keep only a leading "+" and digits.
  const cleaned = sanitizeText(value).replace(/[\s().-]/g, '');
  const hasLeadingPlus = cleaned.startsWith('+');
  const digitsOnly = cleaned.replace(/\D/g, '');
  return hasLeadingPlus ? `+${digitsOnly}` : digitsOnly;
}

export function sanitizeContactPayload(raw) {
  const firstName = sanitizeText(raw?.firstName).slice(0, MAX_LENGTHS.firstName);
  const lastName = sanitizeText(raw?.lastName).slice(0, MAX_LENGTHS.lastName);
  const email = sanitizeText(raw?.email).slice(0, MAX_LENGTHS.email);
  const phone = sanitizePhone(raw?.phone).slice(0, MAX_LENGTHS.phone);
  const message = sanitizeText(raw?.message).slice(0, MAX_LENGTHS.message);
  const selectedServices = Array.isArray(raw?.services)
    ? [...new Set(raw.services.filter((s) => SERVICE_OPTIONS.includes(s)))]
    : [];

  return { firstName, lastName, email, phone, message, services: selectedServices };
}

export function validateContactPayload(payload) {
  const errors = {};

  if (!payload.firstName) errors.firstName = 'First name is required.';
  if (!payload.lastName) errors.lastName = 'Last name is required.';

  if (!payload.email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_REGEX.test(payload.email)) {
    errors.email = 'Invalid email format.';
  }

  if (!payload.phone) {
    errors.phone = 'Phone number is required.';
  } else if (!PHONE_REGEX.test(payload.phone)) {
    errors.phone = 'Invalid phone number. Must be 10-15 digits.';
  }

  if (!payload.message) errors.message = 'Message is required.';

  if (!payload.services.length) {
    errors.services = 'Select at least one service.';
  }

  return errors;
}
