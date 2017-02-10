using System;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace CoreConsoleApp1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var a = "mysupersecret_secretkey!123";
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(a));

            foreach (var b in key.Key)
            {
                Console.Write($"{b:X2}");
            }
        }
    }
}
