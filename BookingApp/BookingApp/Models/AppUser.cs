﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class AppUser
    {
        public int Id { get; set; }
        public int FullName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Comment> Comments { get; set; }
        public List<RoomReservation> RoomReservations { get; set; }
        public List<Accommodation> Accomodations { get; set; }
    }
}