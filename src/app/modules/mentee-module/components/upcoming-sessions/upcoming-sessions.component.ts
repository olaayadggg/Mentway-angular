import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-sessions',
  templateUrl: './upcoming-sessions.component.html',
  styleUrls: ['./upcoming-sessions.component.css']
})
export class UpcomingSessionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Data = [
    {
      mentor: 'Mentor 1',
      scheduledDate1: '2023-06-18',
      scheduledDate2: '2023-06-19'
    },
    {
      mentor: 'Mentor 2',
      scheduledDate1: '2023-06-20',
      scheduledDate2: '2023-06-21'
    }
    // Add more response data as needed
  ];
  
  viewDetails() {
    // Function to handle the click event of the "View" button
    // You can access the detailed data for the clicked row via the 'data' parameter
    console.log('View button clicked for:');
  }
}
