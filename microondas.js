console.log(prato('pipoca',10));

function prato(tipo, tempo) {

    var mensagem = 'Escolha seu prato\n';

    switch(tipo) {
        
        case 'pipoca' :
            mensagem += 'Você selecionou o prato: PIPOCA\n';
            if(tempo == 10) {
                mensagem += 'Prato pronto, Bom apetite!\n';
            } else if(tempo < 10) {
                mensagem += 'Tempo insuficiente\n';
            } else if(tempo == 20){
                mensagem += 'A comida queimou!\n';
            } else if(tempo == 30){
                mensagem += 'Kabumm!\n';
            }
        break;
        
        case 'macarrao' :
            mensagem += 'Você selecionou o prato: MACARRÃO\n';
            if(tempo == 8) {
                mensagem += 'Prato pronto, Bom apetite!\n';
            } else if(tempo < 8) {
                mensagem += 'Tempo insuficiente\n';
            }else if(tempo == 16){
                mensagem += 'A comida queimou!\n';
            }else if(tempo == 24){
                mensagem += 'Kabumm!\n';
            }
        break;

        case 'carne' :
            mensagem += 'Você selecionou o prato: CARNE\n';
            if(tempo == 15) {
                mensagem += 'Prato pronto, Bom apetite!\n';
            } else if(tempo < 15) {
                mensagem = 'Tempo insuficiente\n';
            }else if(tempo == 30){
                mensagem += 'A comida queimou!\n';
            }else if(tempo == 45){
                mensagem += 'Kabumm!\n';
            }
        break;

        case 'feijao' :
                mensagem += 'Você selecionou o prato: FEIJÃO\n';
            if(tempo == 12) {
                mensagem += 'Prato pronto, Bom apetite!\n';
            } else if(tempo < 12) {
                mensagem += 'Tempo insuficiente\n';
            }else if(tempo == 24){
                mensagem += 'A comida queimou!\n';
            }else if(tempo == 36){
                mensagem += 'Kabumm!\n';
            }
        break;

        case 'brigadeiro' :
                mensagem += 'Você selecionou o prato: BRIGADEIRO\n';
            if(tempo == 8) {
                mensagem += 'Prato pronto, Bom apetite!\n';
            } else if(tempo < 8) {
                mensagem += 'Tempo insuficiente\n';
            }else if(tempo == 16){
                mensagem += 'A comida queimou!\n';
            }else if(tempo == 24){
                mensagem += 'Kabumm!\n';
            }
        break;

        default :
            mensagem += 'Prato inexistente\n';
    }   

    return mensagem;

}
