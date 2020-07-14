// Global variable, set to Easy because the radio button Easy is pre-selected.
var _value = "Easy";

$(document).ready(function() {
  $('input[type=radio]').click(function() {
    _value = this.value

    var EasyTable = document.getElementById('EasyTable');
    //Hides table when new radio button is selected
    EasyTable.style.display = 'none';

    var MediumTable = document.getElementById('MediumTable');
    MediumTable.style.display = 'none';

    var HardTable = document.getElementById('HardTable')
    HardTable.style.display = 'none';

    if (_value == "Easy") {
      // Displays table (div) when radio button is selected
      EasyTable.style.display = 'block';
    } else if (_value == "Medium") {
      MediumTable.style.display = 'block';
    } else if (_value == "Hard") {
      HardTable.style.display = 'block';
    } else {
      //Custom option?
    }
  });
});

function Calculate() {
  var placement = document.getElementById("placement").value;
  var kills = document.getElementById("kills").value;
  var total = 0;
  if (_value == "Easy") {
    if (kills == 0) {
      total += 5;
    } else if (kills == 1) {
      total += 2;
    }
    // 2 or more kills adds 0

    if (placement >= 15) {
      total += 5;
    } else if (placement <= 14 && placement >= 10) {
      total += 2;
    }
    // 9 or lower adds 0
  } else if (_value == "Medium") {
    if (kills == 0) {
      total += 7;
    } else if (kills == 1) {
      total += 3;
    }
    // 2 or more kills adds 0

    if (placement >= 15) {
      total += 7;
    } else if (placement <= 14 && placement >= 10) {
      total += 3;
    }
    // 9 or lower adds 0
  } else if (_value == "Hard") {
    if (kills == 0) {
      total += 10;
    } else if (kills == 1) {
      total += 5;
    } else if (kills == 2) {
      total += 3;
    }
    // 3 or more kills adds 0

    if (placement >= 15) {
      total += 10;
    } else if (placement <= 14 && placement >= 10) {
      total += 5;
    } else if (placement <= 9 && placement >= 4) {
      total += 3;
    }
    // 3 or lower adds 0
  }
  document.getElementById("total").innerHTML = total;
}
