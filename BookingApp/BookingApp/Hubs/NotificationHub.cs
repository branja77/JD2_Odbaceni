using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System.Timers;
using BookingApp.Models;

namespace BookingApp.Hubs
{
    //[Authorize(Roles = "Admin, Manager")]
    [HubName("notifications")]
    public class NotificationHub : Hub
    {
        private static IHubContext hubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationHub>();
        private static Timer t = new Timer();
        private BAContext db = new BAContext();

        public void Hello()
        {
            Clients.All.hello("Hello from server");
        }
 
        public static void Notify(string role)
        {
            if (role == "Admin")
            {
                hubContext.Clients.Group("Admins").accommodationNotification("New Accommodation Created For Approve");
            }
            if(role == "Manager")
            {
                hubContext.Clients.Group("Managers").accommodationNotification("New Accommodation Is Approved");
            }
        }

        public void GetTime()
        {
            Clients.All.setRealTime(DateTime.Now.ToString("h:mm:ss tt"));
        }

        public void TimeServerUpdates()
       {
           t.Interval = 1000;
            t.Start();
            t.Elapsed += OnTimedEvent;
        }

        private void OnTimedEvent(object source, ElapsedEventArgs e)
        {
            GetTime();
        }

        public void StopTimeServerUpdates()
        {
            t.Stop();   
        }
    
    public override Task OnConnected()
        {
            //Ako vam treba pojedinacni User
            //sve ubacujem, jer ne znam kako da izvucem UserId
            Groups.Add(Context.ConnectionId, "Admins");
            Groups.Add(Context.ConnectionId, "Managers");

            //var user = Context.Request.GetHttpContext().Request.Headers;

            //if (Context.User.IsInRole("Admin"))
            //{
                
            //}

            //if (Context.User.IsInRole("Manager"))
            //{
                
            //}

            return base.OnConnected();
        }
 
        public override Task OnDisconnected(bool stopCalled)
        {
            Groups.Remove(Context.ConnectionId, "Admins");

            //if (Context.User.IsInRole("Admin"))
            //{
                
            //}
            return base.OnDisconnected(stopCalled);
        }
    }
}