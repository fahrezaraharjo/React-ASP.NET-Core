using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using ReactApp1.Application.Configuration.Emails;
using ReactApp1.Application.Configuration.Emails.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime;
using System.Text;
using System.Threading.Tasks;

namespace ReactApp1.Infrastructure.Emails
{
    public class EmailService(EmailSettings settings) : IEmailService
    {
        public async Task SendEmailAsync(string to, string subject, string body)
        {
            // Boilerplate for sending email.
            var email = new MimeMessage();

            email.From.Add(MailboxAddress.Parse(settings.From));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;

            email.Body = new TextPart("html") { Text = body };

            using var smtp = new SmtpClient();
            await smtp.ConnectAsync(settings.Host, settings.Port, SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(settings.Username, settings.Password);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);
        }
    }
}
