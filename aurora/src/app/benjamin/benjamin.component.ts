import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-benjamin',
  templateUrl: './benjamin.component.html',
  styleUrls: ['./benjamin.component.css']
})
export class BenjaminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBenjaminWeightClick() {
    this.router.navigate(["/benjamin-weight"])
  }
}
