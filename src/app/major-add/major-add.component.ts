import { Component, OnInit, Input} from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-major-add',
  templateUrl: './major-add.component.html',
  styleUrls: ['./major-add.component.css']
})
export class MajorAddComponent implements OnInit {

  @Input() majorData = { code:'', name:'', numberofterms:''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
  }

  addMajor() {
    this.rest.addMajor(this.majorData).subscribe((result) => {
      this.router.navigate(['/Major']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/Major']);
  }

}
