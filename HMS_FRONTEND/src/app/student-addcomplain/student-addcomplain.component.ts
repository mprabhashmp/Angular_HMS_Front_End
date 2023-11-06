import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddcomplainServiceService } from './addcomplain.service.service';
import { HmsHomeService } from '../hms-home/hms-home.service';
import { Observable } from 'rxjs';
import { BarcodeFormat, BrowserMultiFormatReader, Result } from '@zxing/library';

@Component({
  selector: 'app-student-addcomplain',
  templateUrl: './student-addcomplain.component.html',
  styleUrls: ['./student-addcomplain.component.css']
})
export class StudentAddcomplainComponent implements OnInit, OnDestroy{

  userData: any = {
    id: 0,
    user_index: '',
    fname: '',
    lname: '',
    room: '',
    hostaltype: '',
  };
  
  complain: any = {};
  selectedFile!: File | null;

  constructor(
    private complainService: AddcomplainServiceService,
    private homeservice: HmsHomeService,private videoElement: ElementRef
  ) {}
  
  ngOnInit(): void {
    this.loadUserProfile();
    this.allowedFormats
    this.initializeScanner();
    this.codeReader = new BrowserMultiFormatReader();

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
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  
  submitForm() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('c_itemcode', this.selectedFile);
      formData.append('user_index', this.userData.user_index);
      formData.append('c_description', this.complain.c_description);
      formData.append('fname', this.userData.fname);
      formData.append('lname', this.userData.lname);
      formData.append('room', this.userData.room);
      formData.append('c_image', this.complain.c_image);
      formData.append('hostaltype', this.userData.hostaltype);
      formData.append('status', this.userData.status)+'pending..';
  
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
    }

}

clear(): void {
  this.complain = {
    
    c_description: '',
    selectedFile:null,
    c_image:null
  };
}


@ViewChild('videoElement', { static: true })

allowedFormats = [
  BarcodeFormat.QR_CODE,
  BarcodeFormat.EAN_13,
  BarcodeFormat.CODE_128,
  BarcodeFormat.DATA_MATRIX
];

scanResult: string = '';
videoWidth = 300;
videoHeight = 300;
isCameraAvailable = true;
codeReader: any;


ngOnDestroy(): void {
  this.stopCamera();
}

initializeScanner() {
  this.codeReader = new BrowserMultiFormatReader();
  this.requestCameraAccess();
}

requestCameraAccess() {
  const constraints = {
    video: true
  };

  navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
      this.isCameraAvailable = true;
      const video = this.videoElement.nativeElement as HTMLVideoElement;
      if (video && 'play' in video) {
        video.srcObject = stream;
        video.play()
          .then(() => {
            this.startScanning();
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

startScanning() {
  const video = this.videoElement.nativeElement as HTMLVideoElement;
  this.codeReader.decodeFromVideoElement(video, (result: Result) => {
    this.onScanSuccess(result);
  }, (error: any) => {
    this.onScanError(error);
  }, this.allowedFormats);
}

stopCamera() {
  const video = this.videoElement.nativeElement as HTMLVideoElement;
  if (video && video.srcObject) {
    const stream = video.srcObject as MediaStream;
    const tracks = stream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  }
}

onScanSuccess(result: Result) {
  this.scanResult = result.getText();
  console.log('Scanned Result:', this.scanResult);
}

onScanError(error: any) {
  console.error('Scan Error:', error);
}

}
