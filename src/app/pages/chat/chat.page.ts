import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  form: FormGroup;

  constructor(private loginService: LoginService, private route: Router,
    private messageService: MessagesService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.form = this.fb.group({
      messageBody: ['', Validators.required]
    })
  }

  logOUT(){
    return this.loginService.logOut().then(() => {
      console.log("LogOut correcto");
      this.route.navigate(['/login']);

    }).catch((error) => {
      console.log("Error en el logout");
    });
  }

  enviarMensaje(){
    this.messageService.LoadMensajeDB(this.form.controls['messageBody'].value);
  }

}
