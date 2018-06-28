
import  Cerveza from "../cerveza";

const cervezas = [
    new Cerveza('La India Pale Ale (IPA)', 'La India Pale Ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa que se caracteriza como una ale pálida y espumosa con un alto nivel del alcohol y de lúpulo. ', 6, 'ipa.jp'),
    new Cerveza('Stout', 'Stout es el nombre de un estilo de cerveza, tipo ale, muy oscura, originario de las islas británicas. Era el nombre utilizado para la cerveza más fuerte (stout), de 7 % a 8 % de alcohol por volumen, producido por cada cervecería, aunque hoy en día, hay mucha más variedad y pueden ser más dulces o secas, y de 4 % a 8 % de alcohol por volumen.1', 6, 'stout.jpg'),
    new Cerveza('Scottish Ale','Scottish ale es el nombre por el que se define la cerveza elaborada en Escocia. El clima frío de Escocia produjo una cerveza en que la malta era predominante, con la fermentación de la levadura más limpia. que la cerveza Inglesa. hecho con malta ligeramente marrón, mirto de los pantanos en lugar de lúpulo para la amargura. Después los elaboradores usaron más malta tostada y cebada sin maltear para el color. La cerveza escocesa moderna tiene menos amargura, y un sabor más dulce o tal vez afrutado debido al mayor uso de la malta. Algunas pueden tener un gusto ligeramente ahumado.', 6, 'scottish.jpg')
]

export class CervezaService {

    getAll() { return cervezas }
 
    getCerveza(unaCerveza) {
        return cervezas.filter(cerveza => cerveza.matches(unaCerveza))
    }
}