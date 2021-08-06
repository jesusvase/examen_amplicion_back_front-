import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-major-detail',
  templateUrl: './major-detail.component.html',
  styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit {

  Major:any;
  
  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getMajor(this.route.snapshot.params['MajorId']).subscribe((data: {}) => {
      console.log(data);
      this.Major = data;
    });
  }
  cancel() {
    this.router.navigate(['/Major']);
  }

}