const baseStyles = {
  container: 'max-width: 600px; margin: 40px auto; background-color: #1A1A1A; border: 1px solid #333333; border-radius: 16px; overflow: hidden;',
  header: 'background-color: #0A0A0A; padding: 40px; text-align: center; border-bottom: 3px solid #A3E635;',
  logo: 'width: 140px; height: auto;',
  content: 'padding: 48px 40px;',
  heading: 'margin-top: 0; font-size: 26px; font-weight: 700; color: #FFFFFF; letter-spacing: -0.5px; margin-bottom: 24px;',
  text: 'color: #D1D5DB; font-size: 16px; line-height: 1.8; margin-bottom: 24px;',
  highlightText: 'color: #FFFFFF; font-weight: 600;',
  footer: 'margin-top: 48px; border-top: 1px solid #333333; padding-top: 32px;',
  signatureBest: 'color: #9CA3AF; font-size: 15px; margin: 0;',
  signatureName: 'color: #A3E635; font-size: 18px; font-weight: 700; margin: 8px 0 4px 0;',
  signatureEmail: 'color: #9CA3AF; font-size: 15px; margin: 0; text-decoration: none;'
};

// Using Cloudinary f_png to ensure safe rendering on all email clients like Gmail.
const CLOUDINARY_LOGO_URL = "https://res.cloudinary.com/der2xk0cv/image/upload/f_png/v1768468698/eOOLuJEvTLWEYPDnDVB5EtBMEw_b1c3a0.png";

const getBaseHTML = (contentHTML: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SalHurry Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #000000; -webkit-font-smoothing: antialiased;">
  <div style="background-color: #000000; padding: 20px;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #000000;">
        <tr>
          <td align="center">
            <div style="${baseStyles.container}">
              <div style="${baseStyles.header}">
                <img src="${CLOUDINARY_LOGO_URL}" alt="SalHurry" style="${baseStyles.logo}" />
              </div>
              <div style="${baseStyles.content}">
                ${contentHTML}
              </div>
            </div>
          </td>
        </tr>
      </table>
  </div>
</body>
</html>
`;

export function getCareersAutoReplyTemplate(name: string, role: string) {
  const firstName = name.split(' ')[0];
  const content = `
    <h2 style="${baseStyles.heading}">Application Received</h2>
    <p style="${baseStyles.text}">Hi <span style="${baseStyles.highlightText}">${firstName}</span>,</p>
    <p style="${baseStyles.text}">Thank you for your interest in joining SalHurry! We’ve received your application for the="${baseStyles.highlightText}">"${role}"</span> position.</p>
    <p style="${baseStyles.text}">Our hiring team will review your profile thoroughly, and we will get back to you soon if your experience aligns with our requirements.</p>
    <div style="${baseStyles.footer}">
      <p style="${baseStyles.signatureBest}">Best regards,</p>
      <p style="${baseStyles.signatureName}">Salhurry Team</p>
      <a href="mailto:Career@salhurry.in" style="${baseStyles.signatureEmail}">Career@salhurry.in</a>
    </div>
  `;
  return getBaseHTML(content);
}

export function getContactAutoReplyTemplate(name: string, projectType: string) {
  const firstName = name.split(' ')[0];
  const content = `
    <h2 style="${baseStyles.heading}">Project Inquiry Received</h2>
    <p style="${baseStyles.text}">Hi <span style="${baseStyles.highlightText}">${firstName}</span>,</p>
    <p style="${baseStyles.text}">Thank you for sharing your bold vision with us. We have successfully received your project inquiry regarding <span style="${baseStyles.highlightText}">"${projectType}"</span>.</p>
    <p style="${baseStyles.text}">Our team will review your details, and an executive will reach out to you within hours to discuss your next big move.</p>
    <div style="${baseStyles.footer}">
      <p style="${baseStyles.signatureBest}">Best regards,</p>
      <p style="${baseStyles.signatureName}">Salhurry Team</p>
      <a href="mailto:info@salhurry.in" style="${baseStyles.signatureEmail}">info@salhurry.in</a>
    </div>
  `;
  return getBaseHTML(content);
}
