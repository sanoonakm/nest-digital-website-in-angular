import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  department=[
    {
      id:1,
      Title:"aerospace",
      image:"../../../assets/ae.jpg",
      text:"NeST Digital partners with prime Global Aerospace OEMs bringing unmatched value to its customers...",
      
    },
    {
      id:2,
      Title:"insurance",
      image:"../../../assets/insu.jpg",
      text:"Leveraging our rich technical & domain expertise and competitive cost advantages..."

    },
    {
      id:3,
      Title:"banking",
      image:"../../../assets/banknest.jpg",
      text:"The Banking and Financial Services (BFS) Group at NeST Digital has established itself with..."

    },
    {
      id:4,
      Title:"health",
      image:"../../../assets/healthdigi.jpg",
      text:"Healthcare software development is vital for modern healthcare systems. With advancing technology..."
    },
    {
      id:5,
      Title:"gis",
      image:"../../../assets/GIS.jpg",
      text:"Providing better solutions for overcoming the challenges of the technology curve, compet.."

    },
    {
      id:6,
      Title:"mobility",
      image:"../../../assets/mobdigi.jpg",
      text:"Providing better solutions for overcoming the challenges of the technology curve..."

    },
  ]

}
