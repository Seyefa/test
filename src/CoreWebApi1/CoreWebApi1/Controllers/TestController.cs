using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi1.Controllers
{
    public class TestController : Controller
    {
        [HttpGet]
        [Route("tests")]
        public IActionResult Test()
        {
            return Ok(new { StartValue = 1234 });
        }
    }
}
