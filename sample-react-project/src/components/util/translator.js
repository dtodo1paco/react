
import { GENRE_MALE, GENRE_FEMALE, SPECIE_DOG, SPECIE_CAT, QUESTION } from 'util/images.js';

const langMap = {
    'action-edit':{
        "es-ES":'editar'
    },
    'alert':{
        "es-ES":'alerta'
    },
    'alerts':{
        "es-ES":'alertas'
    },
    'animal':{
        "es-ES":'animal'
    },
    'animal-new':{
        "es-ES":'Nuevo animal'
    },
    'animals':{
        "es-ES":'animales'
    },
    'breed-german-pastor':{
        "es-ES":'pastor alemán'
    },
    'error-invalid-form':{
      "es-ES":'Falta algún campo requerido para continuar. Por favor, revise y vuelva a intentarlo.'
    },
    'error-required':{
        "es-ES":'Este campo es requerido'
    },
    'error-required-file':{
        "es-ES":'Se requiere un fichero para cargar'
    },
    'filter-results':{
        "es-ES":'Escriba para filtrar'
    },
    'genre': {
        'es-ES':'Género'
    },
    'genre-male': {
        'es-ES':'macho'
    },
    'genre-female': {
        'es-ES':'hembra'
    },
    'name': {
        "es-ES": 'nombre'
    },
    'specie':{
        'es-ES':'Especie'
    },
    'specie-dog':{
        'es-ES':'canino'
    },
    'sterilized':{
        'es-ES':'Esterilizado'
    },
    'sterilized-yes':{
        'es-ES':'esterilizado'
    },
    'sterilized-no':{
        'es-ES':'entero'
    },
    /*
    Options for dropdowns in forms
     */
    'options-genre':{
        'es-ES':[{
                    value: 'M',
                    label: 'Macho'
                }, {
                    value: 'F',
                    label: 'Hembra'
                }]
    },
    'options-specie':{
        'es-ES':[{
            value: 'C',
            label: 'Canino'
        }, {
            value: 'F',
            label: 'Felino'
        }]
    },
    'options-yesNo':{
        'es-ES':[{
            value: 'Y',
            label: 'Si'
        }, {
            value: 'N',
            label: 'No'
        }]
    },
};
export { langMap };

export function translateCAP (text) {
    return translate_to('es-ES',text).toUpperCase();
}
export function translateC (text) {
    return capitalize(translate_to('es-ES',text));
}

export function translate (text) {
    return translate_to('es-ES',text);
}

export function translate_to (lang, text) {
    if (langMap[text]) {
        return langMap[text][lang];
    }
    return text;
}
export function capitalize(string) {
    if (string != null && string.length > 1) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
}

export function getGenreIcon(genre) {
    if (genre=='male') {
        return GENRE_MALE;
    }
    return GENRE_FEMALE;
}

export function getSpecieIcon(specie) {
    if (specie=='dog') {
        return SPECIE_DOG;
    } else if (specie=='cat') {
        return SPECIE_CAT;
    } else return QUESTION;
}