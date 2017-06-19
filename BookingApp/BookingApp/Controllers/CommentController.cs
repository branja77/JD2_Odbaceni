using BookingApp.Models;
using Microsoft.AspNet.Identity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;

namespace BookingApp.Controllers
{
    public class CommentController : ApiController
    {

        private BAContext db = new BAContext();

        [ResponseType(typeof(Comment))]
        public IHttpActionResult GetComment(int id)
        {
            Comment comm = db.Comments.Include(u => u.Accomodation).
                Include(u => u.User).
                SingleOrDefault(u => u.Id == id);
            if (comm == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(comm);
            }
        }

        public IQueryable GetComments()
        {
            return db.Comments.Include(u => u.Accomodation).Include(u => u.User);
        }


        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult PostComment(Comment comm)
        {
            if (CommentExists(comm.Id))
            {
                return BadRequest();
            }
            try
            {
                string userId = RequestContext.Principal.Identity.GetUserId();
                BAIdentityUser user = db.Users.Include(u=> u.RoomReservations.Select(r => r.Room).Select(a => a.Accomodation)).SingleOrDefault(u => u.Id == userId);
                foreach(RoomReservation res in user.RoomReservations)
                {
                    Accommodation acc = res.Room.Accomodation;
                    if(acc.Id == comm.Accomodation.Id && res.EndDate < DateTime.Now)
                    {
                        Accommodation accommodation = db.Accommodations.Find(comm.Accomodation.Id);
                        comm.User = user;
                        comm.Accomodation = accommodation;
                        db.Comments.Add(comm);
                        db.SaveChanges();
                        accommodation.AvrageGrade = db.Comments.Where(u => u.Accomodation.Id == accommodation.Id).Select( u => u.Grade).ToArray().Average();
                        db.SaveChanges();
                        return CreatedAtRoute("DefaultApi", new { id = comm.Id }, comm);
                    }
                } 
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }

            return BadRequest();
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]

        public IHttpActionResult PutComment(int id, Comment comm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != comm.Id)
            {
                return BadRequest();
            }

            db.Entry(comm).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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

        private bool CommentExists(int id)
        {
            return db.Comments.Count(e => e.Id == id) > 0;
        }

        [ResponseType(typeof(void))]
        [Authorize(Roles = "AppUser")]
        public IHttpActionResult DeleteComment(int id)
        {
            Comment comm = db.Comments.Find(id);
            if (comm == null)
            {
                return BadRequest();
            }

            try
            {
                db.Comments.Remove(comm);
                db.SaveChanges();
                return Ok(comm);
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
