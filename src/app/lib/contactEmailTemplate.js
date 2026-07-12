function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toLabel(value) {
  return value.replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatSubmittedAt(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date);
}

export function buildContactEmailHtml({ firstName, lastName, email, phone, message, services, submittedAt }) {
  const siteUrl = process.env.SITE_URL || '';
  const logoUrl = siteUrl ? `${siteUrl}/images/logoTransparent.png` : null;

  const serviceRows = services
    .map(
      (service) => `
        <td style="padding:4px 8px 4px 0;">
          <span style="display:inline-block;background-color:#0a0a0a;color:#ffffff;font-size:12px;letter-spacing:0.03em;text-transform:uppercase;padding:6px 14px;border-radius:999px;font-family:'Segoe UI',Arial,sans-serif;">
            ${escapeHtml(toLabel(service))}
          </span>
        </td>`
    )
    .join('');

  const fieldRow = (label, value, href) => `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid #ececec;" valign="top">
        <p style="margin:0 0 4px;font-family:'Segoe UI',Arial,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#a3a3a3;">${label}</p>
        <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:16px;color:#141414;">
          ${href ? `<a href="${href}" style="color:#141414;text-decoration:none;">${escapeHtml(value)}</a>` : escapeHtml(value)}
        </p>
      </td>
    </tr>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New Contact Request</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f2ee;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f2ee;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,0.08);">

            <!-- Header -->
            <tr>
              <td style="background-color:#0a0a0a;padding:40px 40px 32px;text-align:center;">
                ${
                  logoUrl
                    ? `<img src="${logoUrl}" alt="Crystal Decor" width="140" style="display:block;margin:0 auto 16px;" />`
                    : `<p style="margin:0 0 8px;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:28px;color:#ffffff;letter-spacing:0.02em;">Crystal Decor</p>`
                }
                <div style="width:48px;height:2px;background-color:#c9a86a;margin:0 auto 16px;"></div>
                <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#c9a86a;">New Consultation Request</p>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding:32px 40px 8px;">
                <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:15px;line-height:1.6;color:#4a4a4a;">
                  A new inquiry was just submitted through the Crystal Decor contact form. Details are below.
                </p>
              </td>
            </tr>

            <!-- Fields -->
            <tr>
              <td style="padding:8px 40px 0;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${fieldRow('Name', `${firstName} ${lastName}`)}
                  ${fieldRow('Email', email, `mailto:${email}`)}
                  ${fieldRow('Phone', phone, `tel:${phone}`)}
                </table>
              </td>
            </tr>

            <!-- Services -->
            <tr>
              <td style="padding:20px 40px 0;">
                <p style="margin:0 0 10px;font-family:'Segoe UI',Arial,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#a3a3a3;">Services Requested</p>
                <table role="presentation" cellpadding="0" cellspacing="0">
                  <tr>${serviceRows}</tr>
                </table>
              </td>
            </tr>

            <!-- Message -->
            <tr>
              <td style="padding:24px 40px 0;">
                <p style="margin:0 0 10px;font-family:'Segoe UI',Arial,sans-serif;font-size:11px;letter-spacing:0.08em;text-transform:uppercase;color:#a3a3a3;">Message</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f9f8f6;border-left:3px solid #c9a86a;border-radius:8px;">
                  <tr>
                    <td style="padding:18px 20px;">
                      <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:15px;line-height:1.7;color:#2b2b2b;white-space:pre-wrap;">${escapeHtml(message)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:32px 40px 40px;">
                <div style="border-top:1px solid #ececec;padding-top:20px;">
                  <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;color:#a3a3a3;">
                    Submitted ${escapeHtml(formatSubmittedAt(submittedAt))}
                  </p>
                  <p style="margin:4px 0 0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px;color:#a3a3a3;">
                    Sent automatically from the Crystal Decor website contact form.
                  </p>
                </div>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buildContactEmailText({ firstName, lastName, email, phone, message, services, submittedAt }) {
  return [
    'New Contact Request - Crystal Decor',
    '',
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Services Requested: ${services.map(toLabel).join(', ')}`,
    '',
    'Message:',
    message,
    '',
    `Submitted ${formatSubmittedAt(submittedAt)}`,
  ].join('\n');
}
