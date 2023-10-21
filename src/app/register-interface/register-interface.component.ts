import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { EditingDataService } from '../services/editing-data.service';

@Component({
  selector: 'app-register-interface',
  templateUrl: './register-interface.component.html',
  styleUrls: ['./register-interface.component.css'],
})
export class RegisterInterfaceComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: EditingDataService,
    private route: Router
  ) {}
  ngOnInit(): void {}

  data: any;

  registrationForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNo: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
        ),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
        ),
      ],
    ],
  });

  get name() {
    return this.registrationForm.get('name');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }
  get phoneNo() {
    return this.registrationForm.get('phoneNo');
  }

  verifydata() {
    this.service
      .registerCustomer({
        name: this.name?.value,
        email: this.email?.value,
        password: this.password?.value,
        phoneNo: this.phoneNo?.value,
      })
      .subscribe(
        (data) => {
          console.log(data);

          Swal.fire({
            title:
              'You are registered SuccessFull Now you Log In with your Email & Password',
            showClass: {
              popup: 'animate__animated animate__fadeInDown',
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp',
            },
          });
          this.registrationForm.reset();
          this.route.navigateByUrl('/login');
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
  }
}
