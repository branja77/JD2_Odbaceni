using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BookingApp.Hubs;

namespace BookingApp.Controllers
{
    public class NotificationController : ApiController
    {
        // GET: api/WSClick
        public IHttpActionResult Post(string id)
        {
            NotificationHub.Notify(id);
            return Ok("Hello");
        }
   
    }
}
