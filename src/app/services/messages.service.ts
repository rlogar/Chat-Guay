import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { getAuth } from 'firebase/auth';
import { Mensajes } from 'src/app/interfaces/mensajes';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private mensajeDB: AngularFireList<Mensajes>;

  constructor(private db: AngularFireDatabase) {
  }


  LoadMensajeDB(body) {
    
    const auth = getAuth();
    const user = auth.currentUser;

    
    const displayName = user.displayName;
    this.mensajeDB = this.db.list('/mensajes', (ref) =>
      ref.orderByChild('fecha'))

    this.mensajeDB.push({
      usuario: displayName,
      fecha: new Date().toLocaleDateString('es-ES'),
      cuerpo: body
    });
    console.log("Mensaje creado en database");
  }
}

