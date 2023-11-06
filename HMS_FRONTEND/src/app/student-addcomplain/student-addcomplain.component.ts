import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddcomplainServiceService } from './addcomplain.service.service';
import { HmsHomeService } from '../hms-home/hms-home.service';
import { Observable } from 'rxjs';
import { BarcodeFormat, BrowserMultiFormatReader, DecodeHintType, Result } from '@zxing/library';

@Component({
  selector: 'app-student-addcomplain',
  templateUrl: './student-addcomplain.component.html',
  styleUrls: ['./student-addcomplain.component.css']
})
export class StudentAddcomplainComponent implements OnInit,AfterViewInit{

  userData: any = {
    id: 0,
    user_index: '',
    fname: '',
    lname: '',
    room: '',
    hostaltype: '',
  };
  
  complain: any = {};
  // selectedFile!: File | null;

  constructor(
    private complainService: AddcomplainServiceService,
    private homeservice: HmsHomeService
  ) {}
  
  ngOnInit(): void {
    this.loadUserProfile();
  }

  initializeScanner() {
    this.codeReader = new BrowserMultiFormatReader();
    this.requestCameraAccess();
   }

  ngAfterViewInit(): void {
    this.initializeScanner();
  }
  
  loadUserProfile(): void {
    this.homeservice.getUserProfile().subscribe(
      (response: any) => {
        this.userData = { ...response };
      },
      (error: any) => {
        console.log('Error retrieving user profile:', error);
        console.log('Error status:', error.status);
        console.log('Error message:', error.message);
        // Handle the error appropriately
      }
    );
  }
  
  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  // }


  
//   submitForm() {
//     if (this.selectedFile) {
//       const formData = new FormData();
//       formData.append('c_itemcode', this.selectedFile);
//       formData.append('user_index', this.userData.user_index);
//       formData.append('c_description', this.complain.c_description);
//       formData.append('fname', this.userData.fname);
//       formData.append('lname', this.userData.lname);
//       formData.append('room', this.userData.room);
//       formData.append('c_image', this.complain.c_image);
//       formData.append('hostaltype', this.userData.hostaltype);
//       formData.append('status', this.userData.status)+'pending..';
  
//       this.complainService.createComplain(formData).subscribe(
//         (response) => {
//           console.log('Complain submitted:', response);
//           alert('Complain Submitted !!');
//           this.clear();
//         },
//         (error) => {
//           console.error('Error submitting complain:', error);
//           alert('Complain Error !!');
//         }
//       );
//     }

// }

onScanSuccess(result: Result) {
  this.scanResult = result.getText();
  console.log('Scanned Result:', this.scanResult);
  if (confirm(`Scanned Result: ${this.scanResult}. Confirm item code ?`)) {
    this.complain.c_itemcode = this.scanResult;
  }
}


submitForm() {
  if (this.scanResult) {
    const formData = new FormData();
    formData.append('c_itemcode', this.scanResult);
    formData.append('user_index', this.userData.user_index);
    formData.append('c_description', this.complain.c_description);
    formData.append('fname', this.userData.fname);
    formData.append('lname', this.userData.lname);
    formData.append('room', this.userData.room);
    formData.append('c_image', this.complain.c_image);
    formData.append('hostaltype', this.userData.hostaltype);
    formData.append('status', this.userData.status);

    this.complainService.createComplain(formData).subscribe(
      (response) => {
        console.log('Complain submitted:', response);
        alert('Complain Submitted !!');
        this.clear();
      },
      (error) => {
        console.error('Error submitting complain:', error);
        alert('Complain Error !!');
      }
    );
  } else {
    console.error('No item code found.');
  }
}

clear(): void {
  this.complain = {
    Result:'',
    c_description: '',
    selectedFile:null,
    c_image:null
  };
}

allowedFormats = [
  BarcodeFormat.QR_CODE,
  BarcodeFormat.EAN_13,
  BarcodeFormat.CODE_128,
  BarcodeFormat.DATA_MATRIX
 ];


@ViewChild('videoElement', { static: true })
videoElement: any;



scanResult: string = '';
videoWidth = 300;
videoHeight = 300;
isCameraAvailable = true;
codeReader: any;

requestCameraAccess() {
  const constraints = {
    video: true
  };


  navigator.mediaDevices.getUserMedia(constraints)
   .then((stream) => {
     const video = this.videoElement.nativeElement as HTMLVideoElement;
     if ('srcObject' in video) {
       video.srcObject = stream;
       video.play()
         .then(() => {
           this.startScanning(video);
         })
         .catch((error) => {
           console.error('Error starting video playback:', error);
         });
     } else {
       console.error('Video element not found or play function not available.');
     }
   })
   .catch((error) => {
     console.error('Error accessing the camera:', error);
   });
}



startScanning(video: HTMLVideoElement) {
  try {
   const that = this; // Preserve 'this' context
 
   this.codeReader.decodeFromVideoDevice(undefined, video, (result: Result, error: any) => {
     if (result) {
       that.onScanSuccess(result);
     } else {
       that.onScanError(error || 'Unknown scan error');
     }
   }, this.allowedFormats);
  } catch (error) {
   console.error('Error starting scanning:', error);
   this.onScanError(error);
  }
 }



onScanError(error: any) {
 console.error('Scan Error:', error);
//  alert('Scan Error: ' + error);
}

}
