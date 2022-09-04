import { Component, Input } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { of } from 'rxjs';


@Component({
 selector: 'file-upload',
 templateUrl: 'file-upload.component.html',
 styleUrls: ['file-upload.component.scss'],
 providers: [
     { provide: NG_VALUE_ACCESSOR, multi: true, useExisting: FileUploadComponent },
     { provide: NG_VALIDATORS, multi: true, useExisting: FileUploadComponent }
 ]
})
export class FileUploadComponent implements ControlValueAccessor, Validator {
  @Input() public requiredFileType: string;

  public fileName = '';
  public uploadProgress: number;
  public fileUploadError = false;
  public fileUploadSuccess = false;
  public disabled = false;

  public onChange = (fileName) => {};
  public onTouched = () => {};
  public onValidatorChange = () => {};

  constructor(private http: HttpClient) {}

  public validate(control: AbstractControl): ValidationErrors | null {
    if (this.fileUploadSuccess) {
      return null;
    }

    let errors: any = {
      requiredFileType: this.requiredFileType
    }

    if (this.fileUploadError) {
      errors.uploadFailed = true;
    }

    return  errors;
  }

  public registerOnValidatorChange(onValidatorChange: () => void): void {
    this.onValidatorChange = onValidatorChange;
  }

  public writeValue(value: any): void {
    this.fileName = value;
  }

  public registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public onFileSelected(event) {
    const file: File = event.target.files[0]

    if (file) {
      const formData = new FormData();

      this.fileName = file.name
      formData.append('thumbnail', file)

      this.http.post('/api/thumbnail-upload', formData, {
        reportProgress: true,
        observe: 'events'
      }).pipe(
          catchError( error => {
            this.fileUploadError = true;

            return of(error)
          }),
          finalize(() => {
            this.uploadProgress = null;
          })
      ).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.fileUploadSuccess = true;
          this.onChange(this.fileName);
          this.onValidatorChange();
        }
      })
    }
  }

  public onClick(fileUpload: HTMLInputElement): void {
    this.onTouched();
    fileUpload.click()
  }
}
