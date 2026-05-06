using Microsoft.AspNetCore.Mvc;

namespace _07_FullStackReact.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PlanetsController : ControllerBase
    {
        public IActionResult SchoolIndex()
        {
            return Ok();
        }
    }
}
