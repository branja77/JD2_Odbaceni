﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Place
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Region Region { get; set; }
        public List<Accommodation> Accomodations { get; set; }
        public Place() { }
    }
}