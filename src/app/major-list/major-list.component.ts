import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.css']
})
export class MajorListComponent implements OnInit {

  Major:any = [];

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    this.getMajors();
    
  }

  getMajors() {
    this.Major = [];
    this.rest.getMajors().subscribe((data: {}) => {
      console.log(data);
      this.Major = data;
    });
  }

  add() {
    this.router.navigate(['/Major-add']);
  }
  
  delete(id) {
    this.rest.deleteMajor(id)
    .subscribe(res => {
        this.getMajors();
      }, (err) => {
        console.log(err);
    });
  }
}
