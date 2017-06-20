// import { Component, OnInit } from '@angular/core';
// import { MdDialogRef } from '@angular/material';

// @Component({
//   selector: 'app-google-map',
//   templateUrl: './google-map.component.html',
//   styles: ['agm-map {height: 400px; width: 400px;}']
// })
// export class GoogleMapComponent implements OnInit {
  
//   lat: number = 45.242268;
//   lng: number = 19.842954;
//   clickedLat: number;
//   clickedLong: number;
//   constructor(
//     public dialogRef: MdDialogRef<GoogleMapComponent>
//   ) { }

//   ngOnInit() {
//   }

//   onClick(res:any){
//     //debugger
//     this.clickedLat = res.coords.lat;
//     this.clickedLong = res.coords.lng;
//   }

//   setLocation(){
//     this.dialogRef.close({lat : this.clickedLat, lng : this.clickedLong});
//   }

// }