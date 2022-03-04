import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wss-data-output',
  templateUrl: './wss-data-output.component.html',
  styleUrls: ['./wss-data-output.component.css']
})
export class WssDataOutputComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  objData: any = {}
  ngOnInit(): void {debugger;

    this.route.params.subscribe((data)=> {
      debugger;

      this.objData.field1 = data.data1;
      this.objData.field2 = data.data2;

    })
  }

}
