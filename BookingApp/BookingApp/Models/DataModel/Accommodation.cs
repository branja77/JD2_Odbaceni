using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookingApp.Models
{
    public class Accommodation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Address { get; set; }
        public double AvrageGrade { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string ImageURL { get; set; }
        public bool Approved { get; set; }
        public List<Room> Rooms { get; set; }
        public List<Comment> Comments { get; set; }
        public AccommodationType AccomodationType { get; set; }
        public Place Place { get; set; }
        public User Owner { get; set; }
        public Accommodation() { }
    }
}