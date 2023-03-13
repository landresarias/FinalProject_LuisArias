// in the beginning of the file
using System.Net;
using System.Net.Mail;

MailAddress to = new MailAddress("landreshn@gmail.com");
MailAddress from = new MailAddress("landreshn@yahoo,com");
MailMessage message = new MailMessage(from, to);
message.Subject = "Good morning, Charles";
message.Body = "Charles, Long time no talk. Would you be up for lunch in Soho on Monday? I'm paying.;";
SmtpClient client = new SmtpClient("smtp.gmail.com", 25)
{
    Credentials = new NetworkCredential("smtp_username", "smtp_password"),
    EnableSsl = true
    // specify whether your host accepts SSL connections
};
// code in brackets above needed if authentication required
try
{
    client.Send(message);
}
catch (SmtpException ex)
{
    Console.WriteLine(ex.ToString());
}

