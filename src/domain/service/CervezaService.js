
import { Cerveza } from "../Cerveza";

const cervezas = [
    new Cerveza('La India Pale Ale (IPA)', 'La India Pale Ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa que se caracteriza como una ale pálida y espumosa con un alto nivel del alcohol y de lúpulo. ', 6, 'ipa.jp'),
    new Cerveza('Stout', 'Stout es el nombre de un estilo de cerveza, tipo ale, muy oscura, originario de las islas británicas. Era el nombre utilizado para la cerveza más fuerte (stout), de 7 % a 8 % de alcohol por volumen, producido por cada cervecería, aunque hoy en día, hay mucha más variedad y pueden ser más dulces o secas, y de 4 % a 8 % de alcohol por volumen.1', 6, 'stout.jpg')
   
]

export class CervezaService {

    getAll() { return cervezas }
 
    getCerveza(unaCerveza) {
        return cervezas.filter(cerveza => cerveza.matches(unaCerveza))
    }
}