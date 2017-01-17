using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ReactPractice.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Demo()
        {
            return View();
        }

        public ActionResult DemoESExample()
        {
            return View();
        }

        public ActionResult DemoSyntax()
        {
            return View();
        }

        public ActionResult DemoComponAndLifecyc()
        {
            return View();
        }

        public ActionResult DemoProps()
        {
            return View();
        }

        public ActionResult DemoState()
        {
            return View();
        }

        public ActionResult DemoHandlingEvents()
        {
            return View();
        }

        public ActionResult ProductPage()
        {
            return View();
        }

        public ActionResult GetItemRightData() 
        {
            var data = this.GetJsonData("itemRightData.json");
            return Content(data, "application/json");
        }

        public ActionResult GetItemLeftData()
        {
            var data = this.GetJsonData("itemLeftData.json");
            return Content(data, "application/json");
        }

        public ActionResult GetItemBottomData()
        {
            var data = this.GetJsonData("itemBottomData.json");
            return Content(data, "application/json");
        }

        private string GetJsonData(string fileName)
        {
            string result = null;
            try
            {
                using (StreamReader sr = new StreamReader(Server.MapPath(string.Concat("~/App_Data/MockApi/", fileName))))
                {
                    result = sr.ReadToEnd();
                };
            }
            catch(Exception ex)
            {
                return ex.Message;
            }

            return result;
        }
    }
}