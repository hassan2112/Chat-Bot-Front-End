import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from './services/home.service';
import { FileUpload } from 'primeng/fileupload';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  
  sidebarVisible: boolean = false;

  @ViewChild('primeFileUpload')
  primeFileUpload!: FileUpload;
  constructor(private homeService: HomeService) { }

  pdfUploaded: boolean = false;
  question: string = '';
  answer: string = '';
  uploading: boolean = true;
  uploadedFiles: any[] = [];
  ngOnInit(): void {
    this.homeService.getData().subscribe((x) => {
      console.log("OBS",x)
    })
  }
  
  product: any = [
  {
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1001',
    code: 'nvklal433',
    name: 'Black Watch',
    description: 'Product Description',
    image: 'black-watch.jpg',
    price: 72,
    category: 'Accessories',
    quantity: 61,
    inventoryStatus: 'OUTOFSTOCK',
    rating: 4
},
{
    id: '1002',
    code: 'zz21cz3c1',
    name: 'Blue Band',
    description: 'Product Description',
    image: 'blue-band.jpg',
    price: 79,
    category: 'Fitness',
    quantity: 2,
    inventoryStatus: 'LOWSTOCK',
    rating: 3
},
];
onRemove(){
  this.uploading = true;
}
onClear(){
  this.uploading = true;
}
onSelect(){
  this.uploading = false;
  console.log('selected')
}
  onUpload(event: any) {
    for(let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  askQuestion() {
    this.homeService.sendQuestion(this.question).subscribe((x:any) => {
      this.answer = x
    })
  }
}
