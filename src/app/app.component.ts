import { Component, OnInit, VERSION } from "@angular/core";
import {
  GridsterConfig,
  GridsterItem,
  DisplayGrid,
  GridType,
  CompactType
} from "angular-gridster2";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor() {}
  name = "Angular " + VERSION.major;
  setOptionsToGridSter(options = {}) {
    let option = {
      gridType: GridType.ScrollVertical,
      compactType: CompactType.None,
      margin: 5,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 20,
      maxCols: 20,
      minRows: 100,
      maxRows: 100,
      maxItemCols: 20,
      minItemCols: 3,
      minItemRows: 3,
      maxItemRows: 20,

      maxItemArea: 2500,
      minItemArea: 3,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 200,
      fixedRowHeight: 200,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: true,
      enableEmptyCellDrag: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellContextMenuCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: false
      },
      swap: true,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };
    return Object.assign({}, option, options);
  }
  emptyCellClick(event: MouseEvent, item: GridsterItem) {}
  options: GridsterConfig;
  mainbackgroundColor = "white";
  dashboard = [
    {
      cols: 5,
      rows: 5,
      y: 0,
      x: 2,
      type: "image",
      name: "hamza"
    },
    {
      cols: 5,
      rows: 5,
      y: 0,
      x: 2,
      type: "image",
      name: "umair"
    }
  ];
  isHide = true;
  internal = true;
  ngOnInit() {
    this.options = this.setOptionsToGridSter();
  }
  gridItemEvent(event, index) {
    // if(index!=null)
    // { var previousindex=this.dashboard[index];
    //   this.dashboard[index] = {cols: previousindex.cols, rows: previousindex.rows, y: previousindex.y, x: previousindex.x,type:"empty"};
    //     let previous=previousindex;
    //     previous.x=previousindex.x+1;
    //     previous.y=previousindex.y+1;
    //   this.dashboard.push(previous);
    // }
  }
  onEditChartMode(item, i) {
    // $("#DashboardMainViz").modal();
  }
  removeItem($event, item) {
    ////////debugger
    $event.preventDefault();
    $event.stopPropagation();
  }
  showMainVizModel() {
    // $("#DashboardMainViz").modal();
  }
  showwidget() {
    if (this.isHide == this.isHide) {
      this.options = this.setOptionsToGridSter({
        resizable: { enabled: true },
        draggable: { enabled: true },
        // minCols: 3,
        // maxCols: 3,
        // maxItemArea: 2500,
        // minItemArea: 3,
        // compactType: CompactType.CompactLeftAndUp,
        displayGrid: DisplayGrid.Always
      });
    }
    this.isHide = !this.isHide;
  }
  async saveDashboard() {}
  updateGrid(col, row) {
    ////debugger;

    let draggable = true;
    let enabled = true;
    if (this.isHide == true) {
      draggable = true;
      enabled = true;
    }
    this.options = this.setOptionsToGridSter({
      minItemCols: 1,
      minItemRows: 1,
      draggable: {
        enabled: draggable
      },
      resizable: {
        enabled: enabled
      },
      minItemArea: 1,
      minCols: col,
      maxCols: col,
      minRows: row,
      maxRows: row,
      displayGrid: DisplayGrid.Always,
      gridType: GridType.Fit
    });
    const myDashboardObj = this.dashboard;
    this.dashboard = [];
    if (localStorage.getItem("gridLayout") == null) {
      setTimeout(() => {
        myDashboardObj.forEach(element => {
          element.cols = 1;
          element.rows = 1;
          this.dashboard.push(element);
        });
        let layoutObj = {
          col: col,
          row: row
        };
        localStorage.setItem("gridLayout", JSON.stringify(layoutObj));
      }, 1000);
    } else {
      setTimeout(() => {
        myDashboardObj.forEach(element => {
          if (col > 5 && row > 5) {
            this.dashboard.push(element);
          } else {
            if (element.cols >= 5) {
              element.cols = 1;
            }
            if (element.rows >= 5) {
              element.rows = 1;
            }
            this.dashboard.push(element);
          }
        });
        let layoutObj = {
          col: col,
          row: row
        };
        localStorage.setItem("gridLayout", JSON.stringify(layoutObj));
      }, 1000);
    }
  }
}
