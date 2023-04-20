import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Mensajes } from 'src/app/interfaces/mensajes';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private mensajeDB: AngularFireList<Mensajes>;

  constructor(private db: AngularFireDatabase) {
       this.mensajeDB = this.db.list('/mensajes', (ref) =>
         ref.orderByChild('date') )

        this.mensajeDB.push({
            usuario :'sam',
            fecha :new Date,
            cuerpo :'Mensaje Prueba'
       });
       console.log("Mensaje creado en database");
      }
   }

