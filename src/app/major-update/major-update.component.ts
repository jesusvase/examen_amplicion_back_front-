import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-major-update',
  templateUrl: './major-update.component.html',
  styleUrls: ['./major-update.component.css']
})
export class MajorUpdateComponent implements OnInit {

  @Input() majorData:any = { majorId: 0, name:'', code:'', numberofterms:''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getMajor(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.majorData = data;
    });
  }

  updateMajor() {
    this.rest.updateMajor(this.majorData).subscribe((result) => {
      this.router.navigate(['/Major']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/Major']);
  }

}