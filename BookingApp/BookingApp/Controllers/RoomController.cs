﻿using BookingApp.Models;
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
    public class RoomController : ApiController
    {
        BAContext db = new BAContext();

        [ResponseType(typeof(Room))]
        public IHttpActionResult GetRoom(int id)
        {
            Room room = db.Rooms.Find(id);
            if(room == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(room);
            }
        }

        public IQueryable GetRooms()
        {
            return db.Rooms;
        }

        // POST api/values
        [ResponseType(typeof(void))]
        public IHttpActionResult PostRoom(Room room)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest();
            }

            if(RoomExists(room.Id))
            {
                return BadRequest();
            }
            try
            {
                db.Rooms.Add(room);
                db.SaveChanges();
                return CreatedAtRoute("DefaultApi", new { id = room.Id }, room);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return BadRequest();
            }

            
        }

        // PUT api/values/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRoom(int id, Room room)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            if(id != room.Id)
            {
                return BadRequest();
            }

            db.Entry(room).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch(DbUpdateConcurrencyException)
            {
                if(!RoomExists(id))
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

        private bool RoomExists(int id)
        {
            return db.Rooms.Count(e => e.Id == id) > 0;
        }

        // DELETE api/values/5
        [ResponseType(typeof(void))]
        public IHttpActionResult DeleteRoom(int id)
        {
            Room room = db.Rooms.Find(id);
            if(room == null)
            {
                return BadRequest();
            }

            try
            {
                db.Rooms.Remove(room);
                db.SaveChanges();
                return Ok(room);
            }
            catch(Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(HttpStatusCode.ExpectationFailed);
            }
        }

        protected override void Dispose(bool disposing)
        {
            if(disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}

