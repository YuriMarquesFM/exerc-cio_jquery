$(document).ready(function (){

    $(document).on('click','#BT_ADC', function()
    {
        let textoDigitado = $('#ADCitem').val();

        if(textoDigitado.length === 0){
            alert("Escreva a tarefa");
            return false;
        }

        let cloneItem = `<div class="box_list_item">
                            <ul>
                                <li><span class="ITM">${textoDigitado}</span><button class="BTN_RE">X</button></li>
                            </ul>       
                        </div>` ;

        $('.box_list').prepend(cloneItem);                
    })

    $(document).on('click','.BTN_RE', function()
    {
        $(this).closest('.box_list_item').remove();
    })

    $(document).on('click','.ITM', function(){

        const DecoracaoAtual = $(this).css('text-decoration');

        if(DecoracaoAtual.includes('line-through')){
            $(this).css({
                'text-decoration':'none'
            })
                
                        
        }
        else {
            $(this).css({
                'text-decoration':'line-through'
            })
        }
});










})