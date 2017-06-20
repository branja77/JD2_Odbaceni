﻿using BookingApp.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using BookingApp.Models;

namespace BookingApp.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.
    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using BookingApp.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<Accomodation>("AccomodationsQuery");
    builder.EntitySet<AccommodationType>("AccommodationTypes"); 
    builder.EntitySet<AppUser>("AppUsers"); 
    builder.EntitySet<Comment>("Comments"); 
    builder.EntitySet<Place>("Places"); 
    builder.EntitySet<Room>("Rooms"); 
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class AccomodationsQueryController : ODataController
    {
        private BAContext db = new BAContext();

        // GET: odata/AccomodationsQuery
        [EnableQuery]
        public IQueryable<Accommodation> GetAccommodationsQuery()
        {
            return db.Accommodations;
        }

        // GET: odata/AccomodationsQuery(5)
        [EnableQuery]
        public SingleResult<Accommodation> GetAccomodation([FromODataUri] int key)
        {
            return SingleResult.Create(db.Accommodations.Where(accommodation => accommodation.Id == key));
        }

        // PUT: odata/AccomodationsQuery(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<Accommodation> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Accommodation accommodation = db.Accommodations.Find(key);
            if (accommodation == null)
            {
                return NotFound();
            }

            patch.Put(accommodation);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(accommodation);
        }

        // POST: odata/AccomodationsQuery
        public IHttpActionResult Post(Accommodation accommodation)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Accommodations.Add(accommodation);
            db.SaveChanges();

            return Created(accommodation);
        }

        // PATCH: odata/AccomodationsQuery(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<Accommodation> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Accommodation accommodation = db.Accommodations.Find(key);
            if (accommodation == null)
            {
                return NotFound();
            }

            patch.Patch(accommodation);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccommodationExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(accommodation);
        }

        // DELETE: odata/AccomodationsQuery(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            Accommodation accommodation = db.Accommodations.Find(key);
            if (accommodation == null)
            {
                return NotFound();
            }

            db.Accommodations.Remove(accommodation);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // GET: odata/AccomodationsQuery(5)/AccommodationType
        [EnableQuery]
        public SingleResult<AccommodationType> GetAccommodationType([FromODataUri] int key)
        {
            return SingleResult.Create(db.Accommodations.Where(m => m.Id == key).Select(m => m.AccomodationType));
        }

        // GET: odata/AccomodationsQuery(5)/Comments
        [EnableQuery]
        public IQueryable<Comment> GetComments([FromODataUri] int key)
        {
            return db.Accommodations.Where(m => m.Id == key).SelectMany(m => m.Comments);
        }

        // GET: odata/AccomodationsQuery(5)/Place
        [EnableQuery]
        public SingleResult<Place> GetPlace([FromODataUri] int key)
        {
            return SingleResult.Create(db.Accommodations.Where(m => m.Id == key).Select(m => m.Place));
        }

        // GET: odata/AccomodationsQuery(5)/Rooms
        [EnableQuery]
        public IQueryable<Room> GetRooms([FromODataUri] int key)
        {
            return db.Accommodations.Where(m => m.Id == key).SelectMany(m => m.Rooms);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AccommodationExists(int key)
        {
            return db.Accommodations.Count(e => e.Id == key) > 0;
        }
    }
}