function FindNumElement1(str) { 
  let arr = str.split(' ');
  let a = 0;
    if (arr[0] == 1 || arr[0] == 2|| arr[0] == 3|| arr[0] == 4|| arr[0] == 5|| arr[0] == 6|| arr[0] == 7|| arr[0] == 8|| arr[0] == 9|| arr[0] == 10){
      a = arr[0]
      return Number(a)
    }
}

function FindNumElement2(str) { 
  let arr = str.split(' ');
  let b = 0;
    if (arr[2] == 1 || arr[2] == 2|| arr[2] == 3|| arr[2] == 4|| arr[2] == 5|| arr[2] == 6|| arr[2] == 7|| arr[2] == 8|| arr[2] == 9|| arr[2] == 10){
      b = arr[2]
      return Number(b)
    }
}

function FindRimElement1(str) { 
  let arr = str.split(' ');
  let i = 0;
  let a = 0;
  for (i; i<arr.length; i++){
    switch(arr[i]){
      case 'I':
        a = 1;
        break;
        case 'II':
        a = 2;
        break;
        case 'III':
        a = 3;
        break;
        case 'IV':
        a = 4;
        break;
        case 'V':
        a = 5;
        break;
        case 'VI':
        a = 6;
        break;
        case 'VII':
        a = 7;
        break;
        case 'VIII':
        a = 8;
        break;
        case 'IX':
        a = 9;
        break;
        case 'X':
        a = 10;
        break;
    }
    return a;
  }
}

function FindRimElement2(str) { 
  let arr = str.split(' ');
  let i = 2;
  let b = 0;
  for (i; i<arr.length; i++){
    switch(arr[i]){
      case 'I':
        b = 1;
        break;
        case 'II':
        b = 2;
        break;
        case 'III':
        b = 3;
        break;
        case 'IV':
        b = 4;
        break;
        case 'V':
        b = 5;
        break;
        case 'VI':
        b = 6;
        break;
        case 'VII':
        b = 7;
        break;
        case 'VIII':
        b = 8;
        break;
        case 'IX':
        b = 9;
        break;
        case 'X':
        b = 10;
        break;
    }
    return b;
  }
}

function ElementType1(str) {
  let arr = str.split(' ');
  let type1 = '';
  if (arr[0] == "I" || arr[0] == "II" || arr[0] == "III" || arr[0] == "IV" || arr[0] == "V" || arr[0] == "VI" || arr[0] == "VII" || arr[0] == "VIII" || arr[0] == "IX" || arr[0] == "X") {
    type1 = 'rim'
  } else type1 = 'num'
  return type1
}

function ElementType2(str) {
  let arr = str.split(' ');
  let type2 = '';
  if (arr[2] == "I" || arr[2] == "II" || arr[2] == "III" || arr[2] == "IV" || arr[2] == "V" || arr[2] == "VI" || arr[2] == "VII" || arr[2] == "VIII" || arr[2] == "IX" || arr[2] == "X") {
    type2 = 'rim'
  } else type2 = 'num'
  return type2
}

function TypeProtect(str) {
  let arr = str.split(' ');
  type1 = ElementType1(str);
  type2 = ElementType2(str);
  if (type1 != type2) throw ('Error');
}

function LengthProtect(str) {
  let arr = str.split(' ');
  if (arr.length != 3) throw ('Error');

}

function convertResToRoman(num) {
  var rimArr = [
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  if (num <= 0) {
    return '';
  }
  for (var i = 0; i < rimArr.length; i++) {
    if (num >= rimArr[i][0]) {
      return rimArr[i][1] + convertResToRoman(num - rimArr[i][0]);
    }
  }
}

function AddA(str) {
  if (ElementType1(str) == 'num') {
    a = FindNumElement1(str);
    return a; 
  } else if (ElementType1(str) == 'rim') { 
      a = FindRimElement1(str);
      return a;
  }
}

function AddB(str) {
  if (ElementType2(str) == 'num') {
    b = FindNumElement2(str);
    return b; 
  } else if (ElementType2(str) == 'rim') { 
      b = FindRimElement2(str);
      return b;
  }
}

function ArabMath (str) {
  let arr = str.split(' ');
  let ArRes = 0;
  switch(arr[1]) {
      case '+':
      ArRes = a + b;
      break;
      case '-':
      ArRes = a - b;
      break;
      case '*':
      ArRes = a * b;
      break;
      case '/':
      ArRes = Math.trunc(a/b);
      break;
  }
  return ArRes  
}

function RimMath (str) {
  let arr = str.split(' ');
  let ArRes = 0;
  switch(arr[1]) {
      case '+':
      ArRes = a + b;
      break;
      case '-':
      ArRes = a - b;
      break;
      case '*':
      ArRes = a * b;
      break;
      case '/':
      ArRes = Math.trunc(a/b);
      break;
  }
  return (ArRes)
}

function OperProtect (str) {
  let arr = str.split(' ');
  if (arr[1] != '+' && arr[1] != '-' && arr[1] != '*' && arr[1] != '/') {
    throw 'Error'
  }
}

function MaxProtect(str) {
  let a = AddA(str);
  let b = AddB(str);

  if (a === undefined || b === undefined) {
    throw 'Error'
  }
}

function Calculate(str) {
  let arr = str.split(' ');
  let a = 0;
  let b = 0;
  let res = 0;
  LengthProtect(str);
  OperProtect(str);
  ElementType1 (str);
  ElementType2 (str);
  TypeProtect (str);
  a = AddA(str);
  b = AddB(str);
  MaxProtect(str);
  if (ElementType1(str) == 'num') {
    res = String(ArabMath(str));
  } else {
    res = convertResToRoman(RimMath(str));
  }  
  return res
}


