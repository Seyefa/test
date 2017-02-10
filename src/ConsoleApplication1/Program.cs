using System;
using System.DirectoryServices;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace Crypto
{
    public class KeyCreator
    {
        public static int Main(string[] args)
        {
            //var number = "201111116875";
            var number = "197811205439";
            //                             "ABBBBBBBBCCCCCDDDDDEEEEEF"
            var b = Regex.IsMatch(number, @"^(\d{2})?\d{6}[+-]?\d{4}$");
            Console.WriteLine(b);

            number = Regex.Replace(number, @"(\d{2})?(\d{6})[+-]?(\d{3})\d", "$2$3");

            var sum = 0;
            for (var i = 0; i < number.Length; i++)
            {
                var n = (number[i] - '0') * (2 - i % 2);
                sum += n / 10 + n % 10;
            }
            Console.WriteLine($"{number} {10 - sum % 10}");

            return 0;


            if (args.Any(arg => arg.Contains("?") || args.Contains("help", StringComparer.OrdinalIgnoreCase)))
            {
                Console.WriteLine("usage: generatekey [<keylengthinbits>]");
                Console.WriteLine("default key length = 256 bits");
                return 2;
            }
            var key = new byte[args.Any() ? int.Parse(args[0]) / 8 : 32];
            RNGCryptoServiceProvider.Create().GetBytes(key);

            Console.WriteLine($"base64:    {Convert.ToBase64String(key)}");
            Console.WriteLine($"base64url: {Base64Url.Encode(key)}");
            //Console.Write("bytes:     ");
            //key.ToList().ForEach(b => Console.Write($"{b:X2} "));
            //Console.WriteLine();
            Console.WriteLine($"guid:      {Guid.NewGuid():N}");

            return 0;
        }
    }

    // Taken from https://brockallen.com/2014/10/17/base64url-encoding/
    public static class Base64Url
    {
        public static string Encode(byte[] arg)
        {
            string s = Convert.ToBase64String(arg); // Standard base64 encoder

            s = s.Split('=')[0]; // Remove any trailing '='s
            s = s.Replace('+', '-'); // 62nd char of encoding
            s = s.Replace('/', '_'); // 63rd char of encoding

            return s;
        }

        public static byte[] Decode(string arg)
        {
            string s = arg;
            s = s.Replace('-', '+'); // 62nd char of encoding
            s = s.Replace('_', '/'); // 63rd char of encoding

            switch (s.Length % 4) // Pad with trailing '='s
            {
                case 0: break; // No pad chars in this case
                case 2: s += "=="; break; // Two pad chars
                case 3: s += "="; break; // One pad char
                default: throw new Exception("Illegal base64url string!");
            }

            return Convert.FromBase64String(s); // Standard base64 decoder
        }
    }
}

//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Protocols.WSTrust;
//using System.IdentityModel.Selectors;
//using System.IdentityModel.Tokens;
//using System.IO;
//using System.Linq;
//using System.Net;
//using System.Security.Claims;
//using System.Security.Cryptography.X509Certificates;
//using System.ServiceModel;
//using System.ServiceModel.Security;
//using System.Text;
//using System.Threading.Tasks;
//using System.Web;
//using System.Xml;
//using Microsoft.IdentityModel.S2S.Tokens;

//namespace ConsoleApplication1
//{
//    class Program
//    {
//        static void Main(string[] args)
//        {
//            string a = "";
//            Console.WriteLine(string.IsNullOrEmpty(a) ? a = "hej" : a);
//            Console.WriteLine(string.IsNullOrEmpty(a) ? a = "hej" : a);


//            var stsEndpoint = "https://fs.tekis.se/adfs/services/trust/13/usernamemixed";
//            var relayPartyUri = "https://localhost:44302/";

//            var binding = new WSHttpBinding(SecurityMode.TransportWithMessageCredential);
//            binding.Security.Message.EstablishSecurityContext = false;
//            binding.Security.Message.ClientCredentialType = MessageCredentialType.UserName;
//            binding.Security.Transport.ClientCredentialType = HttpClientCredentialType.None;

//            var factory = new WSTrustChannelFactory(binding, new EndpointAddress(stsEndpoint));
//            factory.TrustVersion = TrustVersion.WSTrust13;

//            factory.Credentials.UserName.UserName = "tekis\\mato";
//            factory.Credentials.UserName.Password = "k#Y0asK2";

//            var rst = new RequestSecurityToken
//            {
//                RequestType = RequestTypes.Issue,
//                AppliesTo = new EndpointReference(relayPartyUri),
//                KeyType = KeyTypes.Bearer,
//                //TokenType = "urn:oasis:names:tc:SAML:1.0:assertion"
//            };

//            var channel = factory.CreateChannel();

//            var token = channel.Issue(rst) as GenericXmlSecurityToken;


//            Console.WriteLine(token.Id);
//            Console.WriteLine(token.ValidFrom);
//            Console.WriteLine(token.ValidTo);
//            Console.WriteLine(token.TokenXml.OuterXml);



//            var _handler = SecurityTokenHandlerCollection.CreateDefaultSecurityTokenHandlerCollection();
//            var samlToken2 = _handler.ReadToken(new XmlTextReader(new StringReader(token.TokenXml.OuterXml)));

//            var claims = ValidateSamlToken(samlToken2);

//        }

//        public static ClaimsIdentity ValidateSamlToken(SecurityToken securityToken)
//        {
//            var configuration = new SecurityTokenHandlerConfiguration();
//            configuration.AudienceRestriction.AudienceMode = AudienceUriMode.Never;
//            configuration.CertificateValidationMode = X509CertificateValidationMode.None;
//            configuration.RevocationMode = X509RevocationMode.NoCheck;
//            configuration.CertificateValidator = X509CertificateValidator.None;

//            var registry = new ConfigurationBasedIssuerNameRegistry();
//            registry.AddTrustedIssuer("25ff57787d4ec035a979e731a2e661473a64b95a", "http://fs.tekis.se/adfs/services/trust");
//            configuration.IssuerNameRegistry = registry;

//            var handler = SecurityTokenHandlerCollection.CreateDefaultSecurityTokenHandlerCollection(configuration);
//            var identity = handler.ValidateToken(securityToken).First();
//            return identity;
//        }
//    }
//}
