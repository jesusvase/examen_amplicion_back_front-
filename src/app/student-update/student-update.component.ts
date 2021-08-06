import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  @Input() studentData:any = { studentId: 0, name:'', email:'',IdNationality:0,IdMajor:0, password:''};

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getStudent(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.studentData = data;
    });
  }

  updateStudent() {
    this.rest.updateStudent(this.studentData).subscribe((result) => {
      this.router.navigate(['/Student']);
    }, (err) => {
      console.log(err);
    });
  }

  cancel() {
    this.router.navigate(['/Student']);
  }

}