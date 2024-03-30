import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import RecordRTC from 'recordrtc';
import { StereoAudioRecorder } from 'recordrtc';

@Injectable({
  providedIn: 'root',
})
export class RecordingService {
  record: StereoAudioRecorder | null = null;
  error: string = '';
  audioBlob!: Blob;
  private blobSubject: Subject<Blob> = new Subject<Blob>();
  constructor() {}

  StartRecording() {
    let mediaConstraints = {
      video: false,
      audio: true,
    };
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.successCallback.bind(this), this.errorCallback.bind(this));
  }

  successCallback(stream: any) {
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
    this.record = new StereoAudioRecorder(stream, {
      mimeType: 'audio/wav',
      numberOfAudioChannels: 1,
    });
    this.record.record();
  }

  StopRecording(): Observable<Blob> {
    this.record!.stop((blob) => {
      this.blobSubject.next(blob);
    });
    return this.blobSubject.asObservable();
  }

  errorCallback() {
    this.error = 'Can not play audio in your browser';
  }
}
