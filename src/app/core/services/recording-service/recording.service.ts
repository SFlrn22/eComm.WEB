import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordingService {
  mediaRecorder?: MediaRecorder;
  audioChunks: any[] = [];

  constructor() {}

  StartRecording() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.mediaRecorder = new MediaRecorder(stream, {
        mimeType: 'audio/wav',
      });

      this.mediaRecorder.start();

      this.mediaRecorder.addEventListener('dataavailable', (event) => {
        this.audioChunks.push(event.data);
      });
    });
  }

  StopRecording() {
    this.mediaRecorder!.addEventListener('stop', () => {});
    this.mediaRecorder!.stop();

    const audioBlob = new Blob(this.audioChunks);

    return audioBlob;
  }
}
