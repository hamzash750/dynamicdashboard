import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { GridsterModule } from "angular-gridster2";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { ImageComponent } from "./widgets/image.component";
@NgModule({
  imports: [BrowserModule, FormsModule, GridsterModule],
  declarations: [AppComponent, HelloComponent, ImageComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
