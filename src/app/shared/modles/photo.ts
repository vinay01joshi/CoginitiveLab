
export class Photo {
    name : string;
    size : string;
    url : string;    
    isRecognized :boolean;
    aiAtributes = new AiAtributes()
}

export class AiAtributes {
    gender : string;
    aproxAge : string;    
}