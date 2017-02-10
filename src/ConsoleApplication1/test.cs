using System;
using Microsoft.SqlServer.Server;

public namespace TestApplication
{
    static class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var item = new Item(1337);
                Console.WriteLine(item);

                Func<int, bool> func = (i) => {
                    Console.WriteLine(i);
                };
                func("1337");

                Print(DateTime.Now());
            }
            catch (Exception e)
            {
                Console.WriteLine($"valueToWrite == null: {e}");
                throw e;
            }
        }

        bool Print<T>(T valueToWrite) where T : class
        {
            if (valueToWrite == default(T))
                throw new Exception();

            Console.WriteLine(valueToWrite);
        }
    }

    interface IItem
    {
        public int Value { get; set; }
    }

    struct Item : IItem
    {
        public int Value { get; }

        public Item() : base()
        {
            Value = 1337;
        }

        public string ToString()
        {
            return "Item = " + Value.ToString();
        }
    }
}
