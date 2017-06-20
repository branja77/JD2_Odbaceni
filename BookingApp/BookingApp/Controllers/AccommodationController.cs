using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace BookingApp.Controllers
{
    public class AccommodationController : ApiController
    {
        private BAContext db = new BAContext();

        [ResponseType(typeof(Accommodation))]
        public IHttpActionResult GetAccomodation(int id)
        {
            Accommodation accomodation = db.Accommodations.Include(u => u.AccomodationType).
                Include(u => u.Place).
                Include(u => u.Owner).
                SingleOrDefault(u => u.Id == id);

            if (accomodation == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(accomodation);
            }
        }

        public IQueryable GetAccommodations()
        {
            return db.Accommodations.Include(u => u.AccomodationType).
                Include(u => u.Place).
                Include(u => u.Owner);
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles ="Manager")]
        public IHttpActionResult PostAccommodation(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (AccommodationExists(accommodation.Id))
            {
                return BadRequest();
            }
            try
            {
                accommodation.Owner = db.Users.Find(RequestContext.Principal.Identity.GetUserId());
                accommodation.Place = db.Places.Find(accommodation.Place.Id);
                accommodation.AccomodationType = db.AccommodationTypes.Find(accommodation.AccomodationType.Id);
                db.Accommodations.Add(accommodation);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = accommodation.Id }, accommodation);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult PutAccommodation(int id, Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            if (id != accommodation.Id)
            {
                return BadRequest();
            }
            var userStore = new UserStore<BAIdentityUser>(db);
            var userManager = new UserManager<BAIdentityUser>(userStore);
            string userId = RequestContext.Principal.Identity.GetUserId();
            IList<string> roles =  userManager.GetRoles<BAIdentityUser, string>(userId);

            Accommodation accommodationForChange = db.Accommodations.Include(u => u.Owner).SingleOrDefault( u => u.Id == accommodation.Id);
            if(accommodationForChange.Approved == false && accommodation.Approved == true &&
                !roles.Contains("Admin"))
            {
                return StatusCode(HttpStatusCode.Unauthorized);
            }
            else if (accommodationForChange.Owner.Id != userId && !roles.Contains("Admin"))
            {
                return StatusCode(HttpStatusCode.Unauthorized);
            }


            accommodationForChange.Address = accommodation.Address;
            accommodationForChange.Description = accommodation.Description;
            accommodationForChange.Name = accommodation.Name;
            if (accommodation.Approved)
            {
                accommodationForChange.Approved = true;
            }
            

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    return StatusCode(HttpStatusCode.ExpectationFailed);
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        private bool AccommodationExists(int id)
        {
            return db.Accommodations.Count(e => e.Id == id) > 0;
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult DeleteAccommodation(int id)
        {
            var userStore = new UserStore<BAIdentityUser>(db);
            var userManager = new UserManager<BAIdentityUser>(userStore);
            string userId = RequestContext.Principal.Identity.GetUserId();
            IList<string> roles = userManager.GetRoles<BAIdentityUser, string>(userId);

            Accommodation accommodation = db.Accommodations.Find(id);
            
            if (accommodation == null)
            {
                return BadRequest();
            }

            if(!roles.Contains("Admin") && accommodation.Owner.Id != userId)
            {
                return StatusCode(HttpStatusCode.Unauthorized);
            }

            try
            {
                db.Accommodations.Remove(accommodation);
                db.SaveChanges();
                return Ok(accommodation);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(HttpStatusCode.ExpectationFailed);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
