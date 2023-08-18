function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5m1Cr6R1wjH":
        Script1();
        break;
      case "613wT7SxoF7":
        Script2();
        break;
      case "6DK1jZz0G1P":
        Script3();
        break;
      case "5VTsieBZD9P":
        Script4();
        break;
  }
}

function Script1()
{
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
arr = shuffle(arr);

var player = GetPlayer();
player.SetVar("option_1",arr[0]);
player.SetVar("option_2",arr[1]);
player.SetVar("option_3",arr[2]);
player.SetVar("option_4",arr[3]);
player.SetVar("option_5",arr[4]);
player.SetVar("option_6",arr[5]);
player.SetVar("option_7",arr[6]);
player.SetVar("option_8",arr[7]);
player.SetVar("option_9",arr[8]);
player.SetVar("option_10",arr[9]);
player.SetVar("option_11",arr[10]);
player.SetVar("option_12",arr[11]);
}

function Script2()
{
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
arr = shuffle(arr);

var player = GetPlayer();
player.SetVar("option_1",arr[0]);
player.SetVar("option_2",arr[1]);
player.SetVar("option_3",arr[2]);
player.SetVar("option_4",arr[3]);
player.SetVar("option_5",arr[4]);
player.SetVar("option_6",arr[5]);
player.SetVar("option_7",arr[6]);
player.SetVar("option_8",arr[7]);
player.SetVar("option_9",arr[8]);
player.SetVar("option_10",arr[9]);
player.SetVar("option_11",arr[10]);
player.SetVar("option_12",arr[11]);
}

function Script3()
{
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
arr = shuffle(arr);

var player = GetPlayer();
player.SetVar("option1",arr[0]);
player.SetVar("option2",arr[1]);
player.SetVar("option3",arr[2]);
player.SetVar("option4",arr[3]);
player.SetVar("option5",arr[4]);
player.SetVar("option6",arr[5]);
player.SetVar("option7",arr[6]);
player.SetVar("option8",arr[7]);
player.SetVar("option9",arr[8]);
player.SetVar("option10",arr[9]);
player.SetVar("option11",arr[10]);
player.SetVar("option12",arr[11]);

}

function Script4()
{
  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Used like so
var arr = [1, 2, 3];
arr = shuffle(arr);

var player = GetPlayer();
player.SetVar("option1",arr[0]);
player.SetVar("option2",arr[1]);
player.SetVar("option3",arr[2]);

}

