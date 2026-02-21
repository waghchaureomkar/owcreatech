# EmailJS Setup Guide 📧

Follow these steps to configure EmailJS for your contact forms.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" (It's FREE!)
3. Verify your email address

---

## Step 2: Add Email Service

1. Go to **Email Services** tab
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (Recommended for testing)
   - Outlook
   - Yahoo
   - Or any other provider
4. Connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

---

## Step 3: Create Email Template

1. Go to **Email Templates** tab
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Submission - {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
This email was sent from OW CreaTech website contact form.
```

4. **Save the template**
5. **Copy the Template ID** (e.g., `template_xyz789`)

---

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **"Public Key"** section
3. **Copy your Public Key** (e.g., `AbCdEfGhIjKlMnOp`)

---

## Step 5: Update Configuration

Open the file: `lib/emailjs.js`

Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',      // Your Service ID from Step 2
  TEMPLATE_ID: 'template_xyz789',    // Your Template ID from Step 3
  PUBLIC_KEY: 'AbCdEfGhIjKlMnOp',    // Your Public Key from Step 4
}
```

---

## Step 6: Test the Forms

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Test both forms:
   - **Contact Page:** `http://localhost:3001/contact`
   - **Floating Panel:** Click the floating button on homepage

3. Fill and submit the form

4. Check your email inbox for the submission!

---

## ✅ Verification Checklist

- [ ] EmailJS account created
- [ ] Email service connected
- [ ] Email template created with correct variables
- [ ] Public key obtained
- [ ] Configuration file updated (`lib/emailjs.js`)
- [ ] Server restarted
- [ ] Test form submitted successfully
- [ ] Email received in inbox

---

## 📧 Template Variables

These variables are automatically populated from the form:

| Variable | Description | Source |
|----------|-------------|--------|
| `{{from_name}}` | Sender's name | Form field: Name |
| `{{from_email}}` | Sender's email | Form field: Email |
| `{{phone}}` | Contact number | Form field: Phone |
| `{{service}}` | Service type | Form field: Service dropdown |
| `{{message}}` | Message content | Form field: Message |
| `{{to_name}}` | Your company name | Hardcoded: "OW CreaTech Team" |

---

## 🎯 Free Tier Limits

EmailJS Free Plan includes:
- ✅ 200 emails/month
- ✅ Unlimited templates
- ✅ Unlimited services
- ✅ Email support

**Perfect for getting started!**

---

## 🚨 Troubleshooting

### Form submits but no email received?

1. Check spam/junk folder
2. Verify Service ID, Template ID, and Public Key are correct
3. Make sure email service is connected
4. Check EmailJS dashboard for errors

### "Failed to send message" error?

1. Open browser console (F12)
2. Check for error messages
3. Verify internet connection
4. Ensure EmailJS credentials are correct

### Template variables not showing?

1. Make sure variable names match exactly: `{{from_name}}` not `{{fromName}}`
2. Template must be saved after changes
3. Use double curly braces: `{{variable}}` not `{variable}`

---

## 🔒 Security Note

The configuration in `lib/emailjs.js` uses PUBLIC keys that are safe to expose in client-side code. EmailJS designed their service this way specifically for frontend applications.

However, you can add domain restrictions in EmailJS dashboard:
1. Go to **Account** → **Security**
2. Add your domain (e.g., `owcreatech.com`)
3. Only requests from your domain will work

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Template Guide](https://www.emailjs.com/docs/user-guide/templates/)
- [React Integration](https://www.emailjs.com/docs/examples/reactjs/)

---

## 🎉 Done!

Once configured, your contact forms will automatically send emails to your inbox whenever someone submits a form!

**Need help?** Check the EmailJS dashboard for detailed logs and error messages.
