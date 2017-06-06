using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BookingApp.Controllers
{
    public class CountryController : ApiController
    {
        private static BAContext context = new BAContext();
        public IHttpActionResult Get()
        {
            return Json(context.Countries);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var country = context.Countries.Find(id);
            if(country != null)
            {
                return Ok(country);
            }
            else
            {
                return NotFound();
            }
        }

        // POST api/values
        public IHttpActionResult Post([FromBody]Country country)
        {
            try
            {
                context.Countries.Add(country);
                context.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = country.Id }, country);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]Country country)
        {
            var foundCountry = context.Countries.Find(id);
            context.Entry(country).State = EntityState.Modified;
            try
            {
                context.SaveChanges();
                return StatusCode(HttpStatusCode.NoContent);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                if (foundCountry == null)
                    return NotFound();
                return BadRequest();
            }

        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            var country = context.Countries.Find(id);
            if(country != null)
            {
                context.Countries.Remove(country);
                try
                {
                    context.SaveChanges();
                }
                catch(Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return StatusCode(HttpStatusCode.InternalServerError);
                }
                return StatusCode(HttpStatusCode.NoContent);
            }
            else
            {
                return NotFound();
            }
        }
    }
}
