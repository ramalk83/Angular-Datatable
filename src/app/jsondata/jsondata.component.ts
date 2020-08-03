import { Component, OnInit,ViewChild } from '@angular/core';
import { DatasourceService } from './../services/datasource.service';

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent implements OnInit {

  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', {static: true}) table;
  constructor(private dataService: DatasourceService) { }

  ngOnInit() {
    this.getDataFromSource();
  }

  getDataFromSource() {
    this.dataService.getData().subscribe(data => {
      this.tableData = data.data;
      this.dtOptions = {
        data: this.tableData,
        columns: [
          {title: 'userId', data: 'userId'},
          {title: 'id', data: 'id'},
          {title: 'title', data: 'title'},
          {title: 'completed', data: 'completed'},
          
        ]
      };
    }, err => {}, () => {
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable(this.dtOptions);
    });
  }

}