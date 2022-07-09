import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FolderPageRoutingModule, PdfViewerModule],
  declarations: [FolderPage],
})
export class FolderPageModule {}
