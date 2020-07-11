$(document).ready(function(){
    $('input[type=radio]').click(function(){
    var _value = this.value

    var EasyTable = document.getElementById('EasyTable');
    //Hides table when new radio button is selected
    EasyTable.style.display = 'none';

    var MediumTable = document.getElementById('MediumTable');
    MediumTable.style.display = 'none';

    var HardTable = document.getElementById('HardTable')
    HardTable.style.display = 'none';

        if(_value == "Easy")
        {
            // Displays table (div) when radio button is selected
            EasyTable.style.display = 'block';
        }
        else if(_value == "Medium")
        {
            MediumTable.style.display = 'block';
        }
        else if(_value == "Hard")
        {
            HardTable.style.display = 'block';
        }
        else
        {
            //Custom option?
        }
    });
});
